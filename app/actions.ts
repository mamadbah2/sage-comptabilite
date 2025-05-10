"use server"

export async function sendQuoteRequest(formData: FormData) {
  // Récupération des données du formulaire
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const company = formData.get("company") as string
  const companySize = formData.get("companySize") as string
  const service = formData.get("service") as string
  const budget = formData.get("budget") as string
  const timeline = formData.get("timeline") as string
  const message = formData.get("message") as string
  const source = formData.get("source") as string

  // Validation des données
  if (!firstName || !lastName || !email || !phone || !company || !message) {
    throw new Error("Veuillez remplir tous les champs obligatoires")
  }

  // Dans un environnement réel, vous utiliseriez un service d'envoi d'emails comme Nodemailer, SendGrid, etc.
  // Exemple avec un service d'email fictif:
  try {
    // Simulation d'envoi d'email (à remplacer par votre logique d'envoi réelle)
    console.log("Envoi d'un email avec les données suivantes:", {
      to: "mamadoukourouma03@gmail.com",
      subject: `Nouvelle demande de devis de ${firstName} ${lastName} - ${company}`,
      body: `
        Nouvelle demande de devis:
        
        Nom: ${firstName} ${lastName}
        Email: ${email}
        Téléphone: ${phone}
        Entreprise: ${company}
        Taille de l'entreprise: ${companySize}
        Service souhaité: ${service}
        Budget estimé: ${budget || "Non spécifié"}
        Délai souhaité: ${timeline || "Non spécifié"}
        Source: ${source || "Non spécifiée"}
        
        Message:
        ${message}
      `,
    })

    // Simuler un délai pour l'envoi (à supprimer en production)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true }
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error)
    throw new Error("Erreur lors de l'envoi de la demande de devis")
  }
}
