import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactEmailRequest = await req.json();

    // Send email to the business owner
    const emailResponse = await resend.emails.send({
      from: "Website Kontakt <onboarding@resend.dev>",
      to: ["connected.rl@gmail.com"],
      subject: `Neue Kontaktanfrage: ${subject || 'Ohne Betreff'}`,
      html: `
        <h2>Neue Kontaktanfrage über die Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Betreff:</strong> ${subject || 'Ohne Betreff'}</p>
        <p><strong>Nachricht:</strong></p>
        <p style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #007bff; margin: 10px 0;">
          ${message.replace(/\n/g, '<br>')}
        </p>
        <hr>
        <p style="color: #666; font-size: 12px;">Diese E-Mail wurde über das Kontaktformular der Website gesendet.</p>
      `,
    });

    // Send confirmation email to the sender
    const confirmationResponse = await resend.emails.send({
      from: "Connected.RL <onboarding@resend.dev>",
      to: [email],
      subject: "Bestätigung Ihrer Nachricht - Connected.RL",
      html: `
        <h2>Vielen Dank für Ihre Nachricht!</h2>
        <p>Liebe/r ${name},</p>
        <p>vielen Dank für Ihre Anfrage. Ich habe Ihre Nachricht erhalten und werde mich zeitnah bei Ihnen melden.</p>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3>Ihre Nachricht:</h3>
          <p><strong>Betreff:</strong> ${subject || 'Ohne Betreff'}</p>
          <p><strong>Nachricht:</strong></p>
          <p style="background-color: white; padding: 10px; border-radius: 4px;">
            ${message.replace(/\n/g, '<br>')}
          </p>
        </div>
        
        <p>Mit freundlichen Grüßen<br>
        Ihr Connected.RL Team</p>
        
        <hr>
        <p style="color: #666; font-size: 12px;">
          E-Mail: connected.rl@gmail.com<br>
          Adresse: Dürerstraße 10, 69126 Heidelberg
        </p>
      `,
    });

    console.log("Emails sent successfully:", { emailResponse, confirmationResponse });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "E-Mail erfolgreich gesendet" 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: "Fehler beim Senden der E-Mail. Bitte versuchen Sie es später erneut." 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);