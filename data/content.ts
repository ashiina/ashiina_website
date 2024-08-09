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
  
  /*
  My appearances to include in appearanceItems:
Forbes 30 under 30
https://www.forbes.com/profile/ahmad-shiina/

Interview by AWS
https://aws.amazon.com/jp/builders-flash/202002/timers-interview/

IVS CTO Night & Day
https://logmi.jp/business/articles/67272
  */
  export const appearanceItems: ContentItem[] = [
    {
      thumbnail_url: "/content/ogp_ss_forbes30u30.png",
      title: "Forbes 30 under 30 Asia 2017",
      description: "Selected for Forbes 30 under 30 Asia 2017 in the Consumer Technology category.",
      link_url: "https://www.forbes.com/profile/ahmad-shiina/"
    },
    {
      thumbnail_url: "/content/ogp_awsinterview.png",
      title: "AWS Official Interview Article (Japanese)",
      description: "Interview article based on a lecture I gave at AWS Dev Day 2019. I talked about implementing a BFF architecture using AWS Lambda and other serverless solutions.",
      link_url: "https://aws.amazon.com/jp/builders-flash/202002/timers-interview/"
    },
    {
      thumbnail_url: "/content/ogp_ivsctonight.jpg",
      title: "CTO Conference Panel Discussion (Japanese)",
      description: "Article for a panel discussion I participated in at IVS CTO Night & Day, one of the largest CTO conferences in Japan.",
      link_url: "https://logmi.jp/business/articles/67268"
    }
  ];