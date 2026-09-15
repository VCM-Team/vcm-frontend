export type BlogPost = {
    slug: string;
    title: string;
    category: string;
    date: string;
    image: string;
    excerpt: string;
    content: string;
};

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: "international-roofing-expo",
        category: "Business Development",
        title: "International Roofing Expo (IRE)",
        date: "2024-08-08",
        image: "https://workninjas.com/wp-content/uploads/2024/08/Blog-4_Marketing-scaled.jpg",
        excerpt: "Resumen corto del artículo — reemplázalo.",
        content: `
      <p>Párrafo introductorio del artículo.</p>
      <h2>Primer subtítulo</h2>
      <p>Contenido de la sección.</p>
      <h2>Segundo subtítulo</h2>
      <p>Contenido de la sección.</p>
    `,
    },
    {
        slug: "communication-subcontractors",
        category: "Business Development",
        title: "Communication with Subcontractors and Manufacturers",
        date: "2024-08-08",
        image: "https://workninjas.com/wp-content/uploads/2024/08/Blog-4_Marketing-scaled.jpg",
        excerpt: "Resumen corto del artículo — reemplázalo.",
        content: `
      <p>Párrafo introductorio del artículo.</p>
      <h2>Primer subtítulo</h2>
      <p>Contenido de la sección.</p>
    `,
    },
    {
        slug: "marketing-and-lead-generation",
        category: "Marketing",
        title: "Marketing and Lead Generation",
        date: "2024-08-08",
        image: "https://workninjas.com/wp-content/uploads/2024/08/Blog-4_Marketing-scaled.jpg",
        excerpt: "Resumen corto del artículo — reemplázalo.",
        content: `
      <p>Párrafo introductorio sobre marketing y generación de leads.</p>
      <h2>Website Design and Development</h2>
      <p>Descripción del servicio.</p>
      <h2>Search Engine Optimization (SEO)</h2>
      <p>Descripción del servicio.</p>
      <h2>Social Media Management</h2>
      <p>Descripción del servicio.</p>
      <h2>Branding and Graphic Design</h2>
      <p>Descripción del servicio.</p>
      <h2>About Us</h2>
      <p>Descripción de la empresa.</p>
      <p>
        Contáctanos al <a href="tel:+10000000000">(000) 000-0000</a>
        o escríbenos a <a href="mailto:email@dominio.com">email@dominio.com</a>.
      </p>
    `,
    },
    {
        slug: "material-ordering",
        category: "Materials",
        title: "Material Ordering",
        date: "2024-08-08",
        image: "https://workninjas.com/wp-content/uploads/2024/08/Blog-4_Marketing-scaled.jpg",
        excerpt: "Resumen corto del artículo — reemplázalo.",
        content: `
      <p>Párrafo introductorio del artículo.</p>
      <h2>Primer subtítulo</h2>
      <p>Contenido de la sección.</p>
    `,
    },
    {
        slug: "how-to-start-doing-insurance-jobs",
        category: "Insurance",
        title: "How to Start Doing Insurance Jobs",
        date: "2024-08-08",
        image: "https://workninjas.com/wp-content/uploads/2024/08/Blog-4_Marketing-scaled.jpg",
        excerpt: "Resumen corto del artículo — reemplázalo.",
        content: `
      <p>Párrafo introductorio del artículo.</p>
      <h2>Primer subtítulo</h2>
      <p>Contenido de la sección.</p>
    `,
    },
    {
        slug: "supplemental-process-for-insurance-jobs",
        category: "Supplements",
        title: "Supplemental Process for Insurance Jobs",
        date: "2024-08-08",
        image: "https://workninjas.com/wp-content/uploads/2024/08/Blog-4_Marketing-scaled.jpg",
        excerpt: "Resumen corto del artículo — reemplázalo.",
        content: `
      <p>Párrafo introductorio del artículo.</p>
      <h2>Primer subtítulo</h2>
      <p>Contenido de la sección.</p>
    `,
    },
];

export const getPostBySlug = (slug: string) =>
    BLOG_POSTS.find((p) => p.slug === slug);