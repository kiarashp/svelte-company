type Faq = {
	id: string;
	question: string;
	answer: string;
};
const Faqs: Faq[] = [
	{
		id: '1',
		question: 'What industries do you serve?',
		answer:
			'We serve clients across industries, including technology, healthcare, finance, retail, and more.'
	},
	{
		id: '2',
		question: 'How do you ensure security and reliability?',
		answer:
			'We ensure security and reliability through a multi-layered approach including end-to-end encryption, regular security audits, compliance with industry standards, and robust disaster recovery protocols. Our infrastructure is designed for high availability, with continuous monitoring and automated failovers to maximize uptime.'
	},
	{
		id: '3',
		question: 'Can your solutions scale with my business?',
		answer:
			'Yes, our solutions are built with scalability in mind, utilizing cloud-native architectures and flexible technologies that can seamlessly grow alongside your business demands. We design for elasticity, allowing you to easily expand capacity as your needs evolve.'
	},
	{
		id: '4',
		question: 'Do you offer dedicated teams for ongoing projects?',
		answer:
			'Yes, we offer dedicated teams tailored to your ongoing project needs. This ensures consistent expertise, deep project understanding, and seamless collaboration throughout the project lifecycle, from development to maintenance and continuous improvement.'
	}
];
export default  Faqs ;
