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

    // Créer le contenu HTML de l'email
    const htmlContent = `
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

    // Envoyer l'email
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: `Nouvelle demande de projet - ${name}`,
      html: htmlContent,
      replyTo: email,
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