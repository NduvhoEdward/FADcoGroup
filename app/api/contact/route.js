import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, projectType, message } = body

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Send email using a service like SendGrid, Resend, etc.
    // 2. Save to database
    // 3. Send to CRM system
    
    // For demo purposes, we'll just log and return success
    console.log('Contact form submission:', body)

    // Example with a hypothetical email service:
    // await sendEmail({
    //   to: 'info@elitearchitecture.com',
    //   subject: `New Contact Form Submission from ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Project Type:</strong> ${projectType}</p>
    //     <p><strong>Message:</strong> ${message}</p>
    //   `
    // })

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}