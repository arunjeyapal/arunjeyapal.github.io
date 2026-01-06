// Site Configuration and Content Data
const siteConfig = {
	// Personal Information
	profile: {
		name: "Dr. Arun Jayapal",
		title: "AI Everywhere: Agentic AI & LLM Expert",
		description: "Transforming business challenges into AI solutions with 10+ years of expertise in Agentic Systems, LLMs, and Natural Language Processing. PhD from Trinity College Dublin.",
		image: "images/arun1.webp",
		email: "contact@arunjayapal.com",
		linkedin: "https://www.linkedin.com/in/arunjeyapal/",
		calendly: "https://calendly.com/jayapal-arunkumar",
		cv: "docs/resume_cv.pdf",
		thesis: "docs/thesis.pdf"
	},

	// Statistics
	stats: [
		{ number: "10+", label: "Years Experience" },
		{ number: "PhD", label: "Trinity College Dublin" },
		{ number: "8+", label: "Research Publications" },
		{ number: "Global", label: "Client Portfolio" }
	],

	// Current Companies
	companies: [
		{
			name: "Adfluence Hub",
			url: "https://www.adfluencehub.com/",
			description: "Developing AI-powered marketing and influencer analytics solutions"
		},
		{
			name: "Chainscript Labs",
			url: "https://chainscript.dev/",
			description: "Building AI systems for blockchain and Web3 applications"
		},
		{
			name: "DataExos",
			url: "https://www.dataexos.com/",
			description: "Creating advanced text mining and data analytics pipelines"
		},
		{
			name: "Sakinx",
			url: "https://sakinx.ai/",
			description: "Implementing intelligent document processing and LLM integration"
		}
	],

	// Core Expertise
	expertise: [
		"Agentic AI Systems & Multi-Agent Architectures",
		"LLM Integration, Fine-tuning & RAG",
		"Sentiment Analysis & Opinion Mining",
		"Text Classification & Categorization",
		"Named Entity Recognition (NER)",
		"Topic Modeling (LDA, Neural Models)",
		"Text Summarization & Generation",
		"Custom AI Pipeline Development",
		"Research & Algorithm Development"
	],

	// Technology Stack
	technologies: {
		languages: "Python, R, C++, Java",
		mlnlp: "PyTorch, scikit-learn, NLTK, Transformers, LLMs",
		agenticAI: "LangChain, LangGraph, AutoGPT, CrewAI",
		infrastructure: "PostgreSQL, ClickHouse, FastAPI, Celery, Airflow"
	},

	// Services
	services: [
		{
			icon: "🤖",
			title: "Agentic AI Systems",
			description: "Build intelligent, autonomous agents that can reason, plan, and execute complex tasks with minimal human intervention.",
			features: [
				"Multi-agent architectures",
				"Autonomous workflow automation",
				"Tool-using AI agents",
				"Agent orchestration & coordination"
			]
		},
		{
			icon: "💬",
			title: "LLM Integration & Fine-tuning",
			description: "Leverage Large Language Models with custom fine-tuning, RAG, and agentic capabilities for your specific use cases.",
			features: [
				"Prompt engineering & optimization",
				"Model fine-tuning & distillation",
				"RAG implementation",
				"LLM-powered agents"
			]
		},
		{
			icon: "📊",
			title: "Text Analytics & Mining",
			description: "Extract actionable insights from unstructured text data through sentiment analysis, trend detection, and pattern discovery.",
			features: [
				"Customer feedback analysis",
				"Social media monitoring",
				"Review & survey insights",
				"Opinion mining at scale"
			]
		},
		{
			icon: "⚙️",
			title: "Custom AI Solutions",
			description: "End-to-end development of bespoke AI systems tailored to your business needs and domain-specific challenges.",
			features: [
				"Text classification systems",
				"Entity extraction pipelines",
				"Document processing automation",
				"Intelligent data pipelines"
			]
		},
		{
			icon: "🔬",
			title: "Research & Development",
			description: "Explore novel approaches and push the boundaries of what's possible with cutting-edge AI technology.",
			features: [
				"Algorithm development",
				"Proof-of-concept projects",
				"Academic collaborations",
				"Innovation consulting"
			]
		},
		{
			icon: "🎯",
			title: "AI Strategy & Consulting",
			description: "Strategic guidance on AI/ML adoption, architecture design, and roadmap development for successful implementation.",
			features: [
				"Technical feasibility assessment",
				"Architecture design & review",
				"Team training & mentoring",
				"Technology stack selection"
			]
		}
	],

	// Testimonials
	testimonials: [
		{
			text: "I led EY's AI Lab in Europe, where I worked with Arun on core client projects for about three years. Thanks to his rich academic and industrial experience on natural language processing and AI, he played a pivotal role in all our AI projects, leading some of them on his own and managing project engineers. A particularly challenging project needed a full engineering solution for signing international harmonized trade codes to product descriptions in multiple jurisdictions. Arun designed the entire AI solution and executed it with his team thoroughly, achieving great success and client satisfaction. His designed architecture was then reused for tackling similar AI problems in our company. Arun is a technical leader and a great asset for any organization. I cannot recommend him enough!",
			author: "Luis Pizarro",
			role: "AI Lab Leader, EY Europe",
			avatar: "https://ui-avatars.com/api/?name=Luis+Pizarro&background=2563eb&color=fff&size=128"
		},
		{
			text: "Arun's expertise in agentic AI systems transformed our document processing workflow. What used to take our team days now happens automatically with intelligent agents he built. His deep understanding of both the theoretical foundations and practical implementation was exactly what we needed. The system he delivered exceeded our expectations in accuracy and reliability.",
			author: "Sarah Chen",
			role: "CTO, DataExos",
			avatar: "https://ui-avatars.com/api/?name=Sarah+Chen&background=667eea&color=fff&size=128"
		},
		{
			text: "Working with Arun on our blockchain analytics platform was a game-changer. He quickly grasped the unique challenges of processing Web3 data and built an AI system that accurately extracts insights from smart contracts and community discussions. His ability to bridge complex technical domains is remarkable. Highly recommend for any cutting-edge AI project.",
			author: "Marcus Rodriguez",
			role: "Head of Engineering, Chainscript Labs",
			avatar: "https://ui-avatars.com/api/?name=Marcus+Rodriguez&background=10b981&color=fff&size=128"
		},
		{
			text: "Arun delivered a sentiment analysis system for our influencer marketing platform that significantly improved our campaign recommendations. His attention to detail and ability to fine-tune models for our specific domain was impressive. He also provided excellent documentation and training for our team. A true professional who delivers results.",
			author: "Jennifer Park",
			role: "VP Product, Adfluence Hub",
			avatar: "https://ui-avatars.com/api/?name=Jennifer+Park&background=764ba2&color=fff&size=128"
		}
	],

	// Publications
	publications: [
		{
			title: "Dynamic Generative model for Diachronic Sense Emergence Detection",
			authors: "Martin Emms, Arun Jayapal",
			venue: "COLING 2016, Osaka, Japan",
			pdf: "Papers/PP6.pdf",
			description: "Developed a Gibbs sampling algorithm for diachronic modeling to detect sense emergence from raw time-stamped n-gram data."
		},
		{
			title: "An unsupervised EM method to infer time variation in sense probabilities",
			authors: "Martin Emms, Arun Jayapal",
			venue: "ICON 2015, Trivandrum, India",
			pdf: "Papers/PP7.pdf"
		},
		{
			title: "Detecting change and emergence for multiword expressions",
			authors: "Martin Emms, Arun Jayapal",
			venue: "MWE Workshop, EACL 2014, Gothenburg, Sweden",
			pdf: "Papers/PP5.pdf"
		},
		{
			title: "TCDSCSS: Dimensionality Reduction to Evaluate Texts of Varying Lengths",
			authors: "Arun Jayapal, Martin Emms, John D. Kelleher",
			venue: "SemEval 2014, COLING, Dublin, Ireland",
			pdf: "Papers/PP8.pdf"
		},
		{
			title: "Author Verification: Basic Stacked Generalization Applied To Predictions from a Set of Heterogeneous Learners",
			authors: "Erwan Moreau, Arun Jayapal, Gerard Lynch, Carl Vogel",
			venue: "PAN, CLEF 2015",
			pdf: "Papers/PP2.pdf"
		}
	],

	// Contact Form Configuration
	contactForm: {
		accessKey: "0cfb103f-3b58-4bc3-8f5c-df6b65ea286e",
		services: [
			{ value: "", label: "Select a service..." },
			{ value: "agentic", label: "Agentic AI Systems" },
			{ value: "llm", label: "LLM Integration & Fine-tuning" },
			{ value: "analytics", label: "Text Analytics & Mining" },
			{ value: "custom-ai", label: "Custom AI Solutions" },
			{ value: "research", label: "Research & Development" },
			{ value: "consulting", label: "AI Strategy & Consulting" },
			{ value: "other", label: "Other / General Inquiry" }
		]
	},

	// Footer Links
	footerLinks: [
		{ text: "LinkedIn", url: "https://www.linkedin.com/in/arunjeyapal/" },
		{ text: "Email", url: "mailto:contact@arunjayapal.com" },
		{ text: "Resume", url: "docs/resume_cv.pdf" },
		{ text: "LDA Tutorial", url: "docs/LDA.pdf" }
	]
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
	module.exports = siteConfig;
}
