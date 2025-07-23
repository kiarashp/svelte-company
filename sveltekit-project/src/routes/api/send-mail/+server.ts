import { SENDGRID_API_KEY } from '$env/static/private';
import sgmail from '@sendgrid/mail';
import { json } from '@sveltejs/kit';

sgmail.setApiKey(SENDGRID_API_KEY);

export async function POST({ request }) {
	// function delay(ms: number) {
	// 	return new Promise((resolve) => setTimeout(resolve, ms));
	// }

	// await delay(3000);
	const {
		contactName,
		contactEmail,
		contactService,
		contactBudget,
		contactSubject,
		contactMessage
	} = await request.json();
	if (
		!contactName ||
		!contactEmail ||
		!contactService ||
		!contactBudget ||
		!contactSubject ||
		!contactMessage
	) {
		return json({ error: 'All fields are required' }, { status: 400 });
	}
	const msg = {
		to: 'info@kiapmd.dev',
		from: 'form@kiapmd.dev',
		subject: `New Contact Us Form Submission from ABC Company`,
		html: `somebody used the contact us form on ABC Company website. Here are the details:<br>
        <p><strong>Name:</strong> ${contactName}</p>
        <p><strong>Email:</strong> ${contactEmail}</p>
        <p><strong>Subject:</strong> ${contactSubject}</p>
        <p><strong>Budget:</strong> ${contactBudget}</p>
        <p><strong>Service:</strong> ${contactService}</p>
        <p><strong>Message:</strong> ${contactMessage}</p>
    `
	};
	try {
		await sgmail.send(msg);
		return json({ emailSentSuccessfully: true });
	} catch (error) {
		return json({ error }, { status: 500 });
	}
}
