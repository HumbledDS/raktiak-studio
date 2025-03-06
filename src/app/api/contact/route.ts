import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, projectType, budget, deadline, description, source } = await request.json();

    // Configurer le transporteur email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // Important: false pour le port 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email pour l'administrateur
    const adminEmailContent = `
      <h2>Nouvelle demande de projet</h2>
      <h3>Informations du contact :</h3>
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Téléphone :</strong> ${phone || 'Non renseigné'}</p>
      
      <h3>Détails du projet :</h3>
      <p><strong>Type de projet :</strong> ${projectType}</p>
      <p><strong>Budget :</strong> ${budget}</p>
      <p><strong>Date limite souhaitée :</strong> ${deadline}</p>
      
      <h3>Description du projet :</h3>
      <p>${description}</p>
      
      <h3>Source :</h3>
      <p>${source || 'Non renseignée'}</p>
    `;

    // Email de confirmation pour le prospect
    const clientEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #8A2BE2;">Merci pour votre demande de contact</h2>
        
        <p>Bonjour ${name},</p>
        
        <p>Je vous remercie pour votre demande concernant un projet de <strong>${projectType}</strong>. 
        J'ai bien reçu votre message et je m'engage à vous répondre dans un délai de 48 heures ouvrées.</p>
        
        <h3 style="color: #40E0D0;">Récapitulatif de votre demande :</h3>
        <ul style="list-style: none; padding-left: 0;">
          <li>Type de projet : ${projectType}</li>
          <li>Budget envisagé : ${budget}</li>
          <li>Échéance souhaitée : ${deadline}</li>
        </ul>
        
        <p>En attendant, vous pouvez consulter mon portfolio et mes services sur 
        <a href="https://raktiak-studio.com" style="color: #40E0D0;">raktiak-studio.com</a></p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
          <p style="color: #666;">Cordialement,</p>
          <p style="margin: 0; color: #333;"><strong>Babacar NDIAYE</strong></p>
          <p style="margin: 0; color: #666;">RakTiak Studio</p>
          <p style="margin: 0; color: #666;">contact@raktiak-studio.com</p>
          <p style="margin: 0; color: #666;">06 64 12 73 08</p>
        </div>
      </div>
    `;

    // Envoi de l'email à l'administrateur
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: `Nouvelle demande de projet - ${name}`,
      html: adminEmailContent,
      replyTo: email,
    });

    // Envoi de l'email de confirmation au prospect
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: `Confirmation de votre demande - RakTiak Studio`,
      html: clientEmailContent,
    });

    return NextResponse.json(
      { message: "Message envoyé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error);
    return NextResponse.json(
      { message: "Erreur lors de l'envoi du message" },
      { status: 500 }
    );
  }
} 