// interfaces.ts
export interface ContentItem {
    thumbnail_url: string;
    title: string;
    description: string;
    link_url: string;
  }
  
  // data.ts
  export const videoItems: ContentItem[] = [
    {
      thumbnail_url: "/content/video_botpress_stackai1.png",
      title: "Botpress & Stack AI Complete Step-by-Step Tutorial",
      description: "I go through a step-by-step tutorial for how to use Botpress with Stack AI powered by GPT-4.",
      link_url: "https://www.youtube.com/watch?v=D29M66Arq5M"
    },
    {
        thumbnail_url: "/content/video_voiceflow_zapier1.png",
        title: "Voiceflow & Zapier Tutorial",
        description: "I create a Lead Generation AI Chatbot that can answer questions about the business, and guide the customer to giving them their contact info.",
        link_url: "https://www.youtube.com/watch?v=AAm7JchJVKI"
      },
      {
        thumbnail_url: "/content/video_zapier_socialmedia1.png",
        title: "ChatGPT & Zapier Social Media Automation Tutorial",
        description: "I go through a step-by-step tutorial for how to create your own AI Social Media content generator, using Zapier, ChatGPT, and buffer.",
        link_url: "https://www.youtube.com/watch?v=_fpPicFn2aU"
      },
    ];
  
  export const articleItems: ContentItem[] = [
    {
      thumbnail_url: "/path/to/article1_thumbnail.jpg",
      title: "Article 1",
      description: "Description of article 1",
      link_url: "/article1"
    },
    // Add more article items...
  ];