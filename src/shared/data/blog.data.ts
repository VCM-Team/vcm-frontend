export type BlogPost = {
    slug: string;
    title: string;
    category: string;
    date: string;
    image: string;
    excerpt: string;
    content: string;
    tags?: string[];
};

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: "international-roofing-expo",
        category: "Business Development",
        title:
            "International Roofing Expo (IRE): What It Is, When It Happens, and Why Roofers Take It Seriously",
        date: "2024-08-08",
        image: "https://workninjas.com/wp-content/uploads/2025/06/DSC01065-Editada-1024x693.jpg",
        excerpt:
            "A clear, honest look at what the International Roofing Expo is, when it happens, how to attend, and why so many roofing companies treat it as a must-attend event.",
        tags: ["Roofing Contractors", "Subcontractors"],
        content: `
      <p>If you’ve been in roofing long enough, you’ve probably heard people talk about the International Roofing Expo, or simply IRE. Maybe you’ve seen photos of massive show floors and wondered if it’s actually worth the time.</p>
      <p>This article isn’t about hype. It’s a clear explanation of what IRE is, when it happens, how to attend, and why so many roofing companies treat it as a must-attend event — from the perspective of VCM, a team that helps construction and roofing companies grow every day.</p>

      <h2>What Exactly Is the International Roofing Expo?</h2>
      <p>IRE is the <strong>largest roofing and exterior construction trade show in North America</strong>. Once a year, owners, operations managers, sales teams, project managers, manufacturers, suppliers, and service providers come together in one place.</p>
      <p>Unlike generic construction expos, IRE is <strong>100% focused on roofing and exterior systems</strong>. It covers:</p>
      <ul>
        <li>Residential and commercial roofing</li>
        <li>Materials, systems, and installation methods</li>
        <li>Business operations and technology</li>
        <li>Insurance workflows</li>
        <li>Hiring, staffing, and scaling challenges</li>
      </ul>

      <h2>Why IRE Keeps Growing</h2>
      <p>Roofing is no longer just about installing roofs. Modern companies deal with high lead volume, tight labor markets, insurance complexity, and office overload.</p>
      <p>IRE gives the industry a place to share what’s working, see what’s coming next, and build real relationships. Every year it grows because the <strong>business side of roofing keeps getting more demanding</strong>.</p>

      <h2>When and Where Does IRE Take Place?</h2>
      <p>IRE happens <strong>once per year</strong>, typically <strong>between January and March</strong>. The event lasts <strong>three full days</strong>, with optional pre-show education sessions.</p>
      <p>The location rotates between major U.S. cities. Past hosts include Dallas, Las Vegas, New Orleans, Orlando, and San Antonio.</p>

      <h2>How to Register and Attend</h2>
      <ul>
        <li><strong>Register early</strong> through the official IRE website for lower pricing and better access.</li>
        <li><strong>Choose the right pass:</strong> expo-only, full conference, or education-focused. Owners and operations leaders usually get the most from full access.</li>
        <li><strong>Book travel early.</strong> Discounted hotel blocks fill fast.</li>
        <li><strong>Go in with a plan.</strong> IRE is big, and knowing what you want to solve makes it far more valuable.</li>
      </ul>

      <h2>Who Should Go?</h2>
      <ul>
        <li><strong>Owners</strong>, to see where the industry is headed and evaluate solutions that support growth.</li>
        <li><strong>Operations and office managers</strong>, for ideas on scheduling, CRM, invoicing, and internal processes.</li>
        <li><strong>Sales leaders</strong>, to learn about new materials, pricing strategies, and customer communication.</li>
        <li><strong>Project managers</strong>, for tools and best practices that improve execution.</li>
      </ul>

      <h2>What Makes IRE Different</h2>
      <h3>The Scale</h3>
      <p>IRE brings together the entire ecosystem. You’re not just seeing products — you’re seeing how the industry connects.</p>
      <h3>The Conversations</h3>
      <p>Some of the most valuable insights happen in hallways and over coffee, not on stage.</p>
      <h3>The Business Focus</h3>
      <p>A huge portion of the event is about running a better roofing business, not just materials.</p>

      <h2>The Side of IRE Most Roofers Don’t Expect</h2>
      <p>Yes, there are shingles and tools on display. But many of the most crowded conversations are about missed calls, overworked office staff, CRM messes, slow follow-ups, and paperwork. In other words, <strong>operational pain</strong>.</p>
      <p>At VCM, we hear these same challenges from the construction and roofing companies we work with, and they rarely come from a lack of work.</p>

      <h2>The Most Common Challenges We Hear</h2>
      <h3>“We’re Busy, But Everything Feels Messy”</h3>
      <p>Growth is great, but it exposes weak systems fast.</p>
      <h3>“The Office Is Always Behind”</h3>
      <p>Calls, emails, scheduling, follow-ups — it piles up quickly.</p>
      <h3>“The Owner Keeps Getting Pulled Back In”</h3>
      <p>When systems fail, owners step back into day-to-day operations.</p>
      <p>These are not roofing problems. <strong>They are operational problems.</strong></p>

      <h2>How VCM Helps</h2>
      <p><strong>We fix the system before adding people.</strong> VCM starts by understanding what is holding your business back, then designs the processes and accountability it needs, and only then adds dedicated nearshore talent from LATAM to execute. We help with:</p>
      <ul>
        <li>Sales process, CRM and pipeline visibility</li>
        <li>Documented processes and SOPs</li>
        <li>Financial visibility and reporting</li>
        <li>Automation of repetitive, manual work</li>
        <li>Dedicated talent for customer service, estimating, admin and more</li>
      </ul>
      <p>Our goal isn’t to replace your team. It’s to support it so growth doesn’t turn into chaos.</p>

      <h2>How to Get the Most Out of IRE</h2>
      <ul>
        <li>Go in with questions</li>
        <li>Talk to other roofers, not just vendors</li>
        <li>Take notes on operational ideas</li>
        <li>Follow up after the event</li>
      </ul>
      <p>The real value shows up months later, in better systems and smarter decisions.</p>

      <h2>Final Thoughts</h2>
      <p>IRE isn’t about hype. It’s about learning, connection, and building roofing companies that last.</p>
      <p>If your business is growing faster than your office can handle, you don’t have to solve it alone. <a href="/book-demo">Book a free strategy session with VCM</a> — no pressure, just a real conversation about what would actually help.</p>
    `,
    },
    {
        slug: "communication-subcontractors",
        category: "Business Development",
        title: "Communication with Subcontractors and Manufacturers",
        date: "2024-08-15",
        image: "https://workninjas.com/wp-content/uploads/2025/06/NH-1024x601.png",
        excerpt:
            "Effective communication with subcontractors and manufacturers is crucial for the smooth execution of roofing projects.",
        content: `
      <p>Effective communication with subcontractors and manufacturers is crucial for the smooth execution of roofing projects. Here’s how VCM helps construction and roofing companies streamline this process.</p>

      <h2>Clear Communication Channels</h2>
      <p>We help you establish clear communication channels with every party involved, so everyone works from the same information. Fewer misunderstandings mean fewer delays and smoother projects.</p>

      <h2>Scheduling and Coordination</h2>
      <p>Our team supports the scheduling of installations and the coordination with subcontractors to keep each project on track, with regular follow-ups so timelines are met.</p>

      <h2>Issue Resolution</h2>
      <p>When issues come up during a project, they need an owner. We help define who handles each type of problem and how it gets escalated, so issues with subcontractors and suppliers are resolved quickly instead of landing on the owner’s desk.</p>

      <h2>About VCM</h2>
      <p>VCM — Virtual Construction Management — is a growth partner for U.S. construction and roofing companies. We combine business growth consulting with dedicated nearshore talent working from our offices in Lima, Peru.</p>
      <p>Our mission is to help U.S. construction companies recruit, hire, train and scale through reliable nearshore talent. We start by fixing the processes that slow a business down, and then add the people who keep them running every day.</p>
      <p><strong>Ready to bring more structure to your projects?</strong></p>
      <p><a href="/book-demo">Book a free strategy session</a> to get started.</p>
    `,
    },
    {
        slug: "marketing-and-lead-generation",
        category: "Marketing",
        title: "Marketing and Lead Generation",
        date: "2024-08-08",
        image: "https://workninjas.com/wp-content/uploads/2024/08/Blog-4_Marketing-scaled.jpg",
        excerpt:
            "In the competitive roofing industry, attracting the right customers matters more than attracting more of them.",
        content: `
      <p>In the competitive roofing industry, effective marketing and lead generation are vital. But more leads only help if they are the right ones and if someone follows up. Here’s how VCM helps construction and roofing companies attract better customers and turn them into real projects.</p>

      <h2>Clear Positioning</h2>
      <p>Good marketing starts with knowing who your ideal customer is and why they should choose you. We help you define your position and your message, so every campaign speaks to the customers you actually want to win.</p>

      <h2>A Funnel That Makes Sense</h2>
      <p>We map the path from first contact to qualified lead: where people find you, what they see next and how they become an opportunity for your sales team. A clear funnel shows where leads are lost and what to fix first.</p>

      <h2>Campaigns and Lead Nurturing</h2>
      <p>Not every lead is ready to buy today. We plan campaigns that bring in the right audience and set up the follow-up that keeps leads engaged until they are ready to talk with your team.</p>

      <h2>Analytics That Guide Decisions</h2>
      <p>Marketing should be measured, not guessed. We set up the reporting that shows which channels bring the best customers, so you can invest where it works and stop spending where it doesn’t.</p>

      <h2>About VCM</h2>
      <p>VCM — Virtual Construction Management — is a growth partner for U.S. construction and roofing companies. We combine business growth consulting with dedicated nearshore talent working from our offices in Lima, Peru.</p>
      <p>Our mission is to help U.S. construction companies recruit, hire, train and scale through reliable nearshore talent. We start by fixing the processes that slow a business down, and then add the people who keep them running every day.</p>
      <p><strong>Ready to attract customers who fit your business?</strong></p>
      <p><a href="/book-demo">Book a free strategy session</a> to get started.</p>
    `,
    },
    {
        slug: "material-ordering",
        category: "Materials",
        title: "Material Ordering",
        date: "2024-08-08",
        image: "https://workninjas.com/wp-content/uploads/2024/08/Blog-4_Marketing-scaled.jpg",
        excerpt:
            "Efficient material ordering is essential for keeping your roofing projects on track and within budget.",
        content: `
      <p>Efficient material ordering is essential for keeping your roofing projects on track and within budget. Here’s how VCM helps construction and roofing companies bring more structure to this part of the business.</p>

      <h2>Accurate Takeoffs</h2>
      <p>Every good order starts with accurate quantities. Our estimators prepare material takeoffs based on each project’s plans and specifications, helping you avoid both excess material and costly shortages.</p>

      <h2>Vendor Coordination</h2>
      <p>Orders, confirmations and delivery dates can easily get lost between calls and emails. We help you set up a clear process for coordinating with vendors, with dedicated support to follow up on every order so materials arrive when the crew needs them.</p>

      <h2>Inventory Tracking</h2>
      <p>Knowing what you have, what is on the way and what you need next prevents delays on the job site. We help you define how inventory is tracked and reviewed, so reorders happen on time instead of at the last minute.</p>

      <h2>About VCM</h2>
      <p>VCM — Virtual Construction Management — is a growth partner for U.S. construction and roofing companies. We combine business growth consulting with dedicated nearshore talent working from our offices in Lima, Peru.</p>
      <p>Our mission is to help U.S. construction companies recruit, hire, train and scale through reliable nearshore talent. We start by fixing the processes that slow a business down, and then add the people who keep them running every day.</p>
      <p><strong>Ready to keep your projects on schedule and on budget?</strong></p>
      <p><a href="/book-demo">Book a free strategy session</a> to get started.</p>
    `,
    },
    {
        slug: "how-to-start-doing-insurance-jobs",
        category: "Insurance",
        title: "How to Start Doing Insurance Jobs",
        date: "2024-08-08",
        image: "https://workninjas.com/wp-content/uploads/2024/08/Blog-4_Marketing-scaled.jpg",
        excerpt:
            "Jumping into the insurance market can be a game-changer for your roofing business.",
        content: `
      <p>Jumping into the insurance market can be a game-changer for your roofing business. Here’s how Work Ninjas can help you navigate this transition seamlessly.</p>

      <h2>Getting Started</h2>
      <p>The first step is understanding the basics of insurance jobs. Our team will provide you with all the necessary training and resources to get started, including an overview of common insurance terms and processes. <strong>Did you know</strong> that insurance-related roofing jobs can increase your revenue by up to 30%?</p>

      <h2>Building Relationships</h2>
      <p>Establishing strong relationships with insurance adjusters and understanding their expectations is crucial. We’ll guide you on how to communicate effectively and build these essential connections. <strong>Fun fact:</strong> Building good relationships with adjusters can speed up your claim approvals by 20%.</p>

      <h2>Documentation and Compliance</h2>
      <p>Proper documentation is non-negotiable. Our Supplement Ninjas will assist you in preparing and organizing all required documents, ensuring compliance with insurance standards. With our help, you’ll never have to worry about missing paperwork.</p>

      <h2>Efficient Processes</h2>
      <p>Efficiency is key in handling insurance jobs. We’ll help you streamline your processes, from initial inspections to final repairs, making the entire workflow more manageable and profitable. <strong>Did you know</strong> that efficient processes can reduce job completion time by up to 25%?</p>

      <h2>About Us</h2>
      <p>Work Ninjas is a team of roofing experts delivering dynamic front and back-end solutions. Our highly-trained Ninjas act as an extension of your team, helping scale your roofing business to new heights. Our mission is to support roofing contractors in North America by providing the tools, expertise, and assistance they need to expand and grow their businesses.</p>
      <p>Founded by seasoned roofing professionals, Work Ninjas began from managing a successful roofing company and creating a back office in Central America. This success led us to offer our services to other contractors at a fraction of the cost.</p>
      <p><strong>Ready to simplify your insurance jobs and maximize your profits?</strong></p>
      <p><a href="/contact-us">Contact us</a> to get started.</p>
    `,
    },
    {
        slug: "supplemental-process-for-insurance-jobs",
        category: "Supplements",
        title: "Supplemental Process for Insurance Jobs",
        date: "2024-08-08",
        image: "https://workninjas.com/wp-content/uploads/2024/08/Blog-4_Marketing-scaled.jpg",
        excerpt:
            "Supplements are a normal part of insurance work, and a clear process makes the difference between a smooth claim and a slow one.",
        content: `
      <p>Handling insurance-related jobs can feel overwhelming for many roofing contractors, especially when the original claim doesn’t cover everything the job requires. That’s where supplements come in. Here’s how the supplemental process works, and how VCM helps you build the operation to handle it well.</p>

      <h2>What Is a Supplement?</h2>
      <p>A supplement is a request to add items to an insurance claim that were missed or not known when the original estimate was written. It is a normal part of insurance work, and it depends on showing clearly why each additional item is needed.</p>

      <h2>Documentation Makes the Difference</h2>
      <p>Supplements are approved or denied based on documentation. Photos, measurements, code requirements and a clear explanation of each item need to be complete, organized and easy to review. Missing information is one of the most common reasons a supplement gets delayed.</p>

      <h2>Consistent Follow-Up</h2>
      <p>Insurance claims involve several parties and a lot of back-and-forth. Without a clear follow-up routine, requests can sit for weeks. Knowing who follows up, when and how keeps each claim moving.</p>

      <h2>The Role of Estimating Software</h2>
      <p>Many insurance estimates are written in specialized estimating software, such as Xactimate. Understanding how line items are structured in those estimates helps contractors spot what is missing and present their requests in a format that is easy to review.</p>

      <h2>How VCM Helps</h2>
      <p>VCM helps you build the process behind your insurance work: we document the workflow, define who owns each step and add dedicated support from our team in Lima, from administrative assistants who keep documentation and follow-ups on track to estimators who prepare takeoffs and estimates.</p>

      <h2>About VCM</h2>
      <p>VCM — Virtual Construction Management — is a growth partner for U.S. construction and roofing companies. We combine business growth consulting with dedicated nearshore talent working from our offices in Lima, Peru.</p>
      <p>Our mission is to help U.S. construction companies recruit, hire, train and scale through reliable nearshore talent. We start by fixing the processes that slow a business down, and then add the people who keep them running every day.</p>
      <p><strong>Ready to bring more structure to your insurance work?</strong></p>
      <p><a href="/book-demo">Book a free strategy session</a> to get started.</p>
    `,
    },
];

export const getPostBySlug = (slug: string) =>
    BLOG_POSTS.find((p) => p.slug === slug);