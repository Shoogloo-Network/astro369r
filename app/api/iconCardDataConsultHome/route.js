export async function GET() {
    const data = [
      {
          id: 1,
          icon: "prediction.png",
          title: "Prediction1 Report",
          description: "Safe and trusted Experts"
      },
      {
          id: 2,
          icon: "consult-thumbnail.png",
         
          title: "Instant Video Consultation",
          description: "Connect within 60 secs"
      },
      {
          id: 3,
          icon: "talk-astrologer-thumbnail.png",
          title: "Talk to Astrologer",
          description: "Safe and trusted Experts"
      },
      {
          id: 4,
          icon: "chat-thumbnail.png",
          title: "Chat with Astrologer",
          description: "Connect within 60 secs"
      }
    ];
  
    
  
  
    
    return Response.json(data);
  
  } 
  