export interface Project {
  id: number
  title: string
  category: string
  subcategory?: string // Optional: subcategory for poster projects ("personal" or "commission")
  image: string
  description: string
  fullDescription: string
  images: string[]
  video?: string // Optional: video file path (put videos in /public folder, use "/filename.mp4") OR YouTube URL (e.g., "https://www.youtube.com/watch?v=VIDEO_ID" or "https://youtu.be/VIDEO_ID")
  date: string // Date when project was completed (format: "YYYY-MM-DD" or "YYYY-MM-DD HH:MM")
}

/**
 * PROJECT TEMPLATE
 * 
 * To add a new project, copy the template below and fill in your details:
 * 
 * {
 *   id: 1,                                    // Unique number (increment for each project)
 *   title: "Your Project Title",              // Project name (shown on card and detail page)
 *   category: "UI design",                    // Must be one of: "UI design", "branding", "videography", "poster", "prints"
 *   subcategory: "personal",                  // OPTIONAL: For "poster" category only - use "personal" or "commission"
 *   image: "/your-main-image.jpg",            // Main image path (put images in /public folder, use "/filename.jpg" - NO /public prefix!)
 *   description: "Short description",         // Brief description (shown on project card). For "poster" category, this is the ONLY text shown on the detail page.
 *   fullDescription: "Long detailed description...", // Full description (shown on project detail page, NOT used for "poster" category)
 *   images: [                                 // Array of images for detail page gallery
 *     "/your-main-image.jpg",                 // First image (usually same as main image)
 *     "/additional-image-1.jpg",             // Additional images for gallery
 *     "/additional-image-2.jpg",
 *   ],
 *   video: "/your-video.mp4",                 // OPTIONAL: Video file path OR YouTube URL
 *                                              // - Local file: "/filename.mp4" (put in /public folder)
 *                                              // - YouTube: "https://www.youtube.com/watch?v=VIDEO_ID" or "https://youtu.be/VIDEO_ID"
 *   date: "2024-12-15",                       // REQUIRED: Date when project was completed (format: "YYYY-MM-DD" or "YYYY-MM-DD HH:MM")
 * },
 * 
 * INSTRUCTIONS:
 * 1. Add your project images/videos to the /public folder (or use YouTube URLs for videos)
 * 2. Copy the template above
 * 3. Replace the placeholder values with your project information
 * 4. Make sure image/video paths start with "/" (e.g., "/my-project.jpg" or "/my-video.mp4")
 * 5. Use one of the available categories: "UI design", "branding", "videography", "poster", "prints"
 * 6. For "poster" category projects, you can optionally add subcategory: "personal" or "commission"
 *    - This allows filtering poster projects by subcategory when hovering over the "POSTER" button
 *    - If no subcategory is specified, the project will still appear when clicking "POSTER"
 * 7. If you add a video, it will replace the main image on the detail page. You can still have images in the gallery below.
 *    - For YouTube videos: Use the full YouTube URL (e.g., "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
 *    - For local videos: Use "/filename.mp4" (file must be in /public folder)
 * 8. Add the date field with format "YYYY-MM-DD" (e.g., "2024-12-15") - Projects are automatically sorted by newest first
 */

export const projects: Project[] = [
  // ============================================
  // ADD YOUR PROJECTS BELOW
  // ============================================
  
  // Template for adding a new project (copy this block and fill in your details):
  {
    id: 1, // ⚠️ IMPORTANT: Each project needs a unique ID number (1, 2, 3, 4, etc.)
    title: "병원 청소 업체, 크크디", // Project title shown on card and detail page
    category: "prints", // ⚠️ Must be exactly one of: "UI design", "branding", "videography", "poster", "prints"
    image: "/크크디이.png", // ⚠️ Put image in /public folder, reference as "/filename.png" (NO /public in path!)
    description: "병원 전문 청소 업체인 크크디의 리플렛 디자인 작업을 진행하였습니다.", // Short description (1-2 sentences)
    fullDescription: "병원 전문 청소업체 크크디의 리플렛 디자인 프로젝트를 진행 하였습니다. 기본적인 키 컬러인 주황색을 기반으로 하여 디자인하였으며, 식물의 그림자, 비누거품과 같은 청정함과 연관된 요소들을 통해 깨끗함을 표현하였습니다.", // Long description for detail page
    images: [
      "/크크디일.png", // Main image (usually same as 'image' field above)
      "/크크디쌩일.png", // Additional images for the gallery (optional, add as many as you want)
      "/크크디쌩이.png",
    ],
    date: "2025-06-10", // Date when project was completed (format: "YYYY-MM-DD")
  },

  {
    id: 2, // ⚠️ IMPORTANT: Each project needs a unique ID number (1, 2, 3, 4, etc.)
    title: "The Idea of Wave", // Project title shown on card and detail page
    category: "poster", // ⚠️ Must be exactly one of: "UI design", "branding", "videography", "poster", "prints"
    subcategory: "personal", // OPTIONAL: For "poster" category only - use "personal" or "commission"
    image: "/The idea of wave.png", // ⚠️ Put image in /public folder, reference as "/filename.png" (NO /public in path!)
    description: "제가 이 포스터에 담고 싶었던건 주체적인 인생을 살고 싶다는 저의 의지였어요.\n하지만 이 '살아가는 것'이라는 게 모두와 어울려 '흘러가는대로 사는 것'이라는 생각을 버릴 수 없었어요.\n이 사회의 구성원으로써 지켜야할 건 있으니까요.\n이런 생각을 담은 포스터가 바로 이 Idea of wave에요.", // Short description (1-2 sentences). Use \n for line breaks.
    fullDescription: " ", // Long description for detail page
    images: [
      "/", // Main image (usually same as 'image' field above)
      "/", // Additional images for the gallery (optional, add as many as you want)
      "/",
    ],
    date: "2024-07-19", // Date when project was completed (format: "YYYY-MM-DD")
  },

  {
    id: 3, // ⚠️ IMPORTANT: Each project needs a unique ID number (1, 2, 3, 4, etc.)
    title: "Riposati un attimo", // Project title shown on card and detail page
    category: "poster", // ⚠️ Must be exactly one of: "UI design", "branding", "videography", "poster", "prints"
    subcategory: "personal", // OPTIONAL: For "poster" category only - use "personal" or "commission"
    image: "/Riposati un attimo.png", // ⚠️ Put image in /public folder, reference as "/filename.png" (NO /public in path!)
    description: "riposati un attimo는 이탈리아어로, '잠시 쉬어 간다'라는 뜻을 담고 있어요. \n 모두가 바쁘게 살아가는 세상 속에서, \n 조용한 자동차 안 만큼 편안한 곳은 없는 것 같아요.", // Short description (1-2 sentences). Use \n for line breaks.
    fullDescription: " ", // Long description for detail page
    images: [
      "/", // Main image (usually same as 'image' field above)
      "/", // Additional images for the gallery (optional, add as many as you want)
      "/",
    ],
    date: "2024-09-24", // Date when project was completed (format: "YYYY-MM-DD")
  },

  {
    id: 4, // ⚠️ IMPORTANT: Each project needs a unique ID number (1, 2, 3, 4, etc.)
    title: "다문화가정 멘토링 동아리, 다누리", // Project title shown on card and detail page
    category: "poster", // ⚠️ Must be exactly one of: "UI design", "branding", "videography", "poster", "prints"
    subcategory: "commission", // OPTIONAL: For "poster" category only - use "personal" or "commission"
    image: "/다문화가정 멘토링 동아리 다누리 포스터.png", // ⚠️ Put image in /public folder, reference as "/filename.png" (NO /public in path!)
    description: "다문화가정 멘토링 동아리인 '다누리'의 포스터 디자인 작업을 진행하였습니다.", // Short description (1-2 sentences)
    fullDescription: "", // Long description for detail page
    images: [
      "/", // Main image (usually same as 'image' field above)
      "/", // Additional images for the gallery (optional, add as many as you want)
      "/",
    ],
    date: "2025-05-25", // Date when project was completed (format: "YYYY-MM-DD")
  },  


  {
       id: 6, // ⚠️ IMPORTANT: Each project needs a unique ID number (1, 2, 3, 4, etc.)
       title: "문득, 서울", // Project title shown on card and detail page
       category: "videography", // ⚠️ Must be exactly one of: "UI design", "branding", "videography", "poster", "prints"
       image: "/문득서울썸네일잉.jpg", // ⚠️ Thumbnail image for project card (put in /public folder, use "/filename.jpg" - NO /public prefix!)
       description: "제 9회 서울 29초 영화제에서 우수상을 수상한 출품작입니다. ", // Brief description (shown on project card)
       fullDescription: "바쁘고 정신없는 하루를 보내다 보면, 서울의 일상이 지루하게 반복되곤 하죠. 그러다 문득 한강을 바라보며 우리는 깨닫게 돼요. '일상 속의 특별한 순간들을 그동안 무심코 지나치지는 않았을까? 어쩌면 서울의 특별함은 매일매일 우리와 함께하고 있었던 건 아닐까?' 그제서야 보이지 않던 아름다움들이 하나둘씩 마음속에 떠올라요. 한강의 물결처럼 조용히 스며든 서울의 진짜 모습을 저는 바로 그곳에서 발견하게 되었습니다.", // Long description for detail page
       images: [
         "/문득서울사진일.jpg", // Optional: Additional images for gallery below video
         "/문득서울사진이.jpg",
         "/문득서울사진삼.jpg",
       ],
       video: "/https://www.youtube.com/watch?v=FGnFIMWZ09E", // ⚠️ REQUIRED for video projects: Video file path (put video in /public folder, use "/filename.mp4" - NO /public prefix!)
       date: "2024-12-13", // Date when project was completed (format: "YYYY-MM-DD")
     },


     {
      id: 7, // ⚠️ IMPORTANT: Each project needs a unique ID number (1, 2, 3, 4, etc.)
      title: "매일의 커피", // Project title shown on card and detail page
      category: "videography", // ⚠️ Must be exactly one of: "UI design", "branding", "videography", "poster", "prints"
      image: "/매일의커피썸네일.png", // ⚠️ Thumbnail image for project card (put in /public folder, use "/filename.jpg" - NO /public prefix!)
      description: "제 10회 커피 29초 영화제에서 우수상을 수상한 출품작입니다. (with.황연식 감독) ", // Brief description (shown on project card)
      fullDescription: "당신의 오늘은 어떤 커피인가요? 하루는 에스프레소처럼 씁쓸하기도, 하루는 아메리카노처럼 평범하기도, 하루는 카라멜 마끼아또처럼 달콤하기도, 이처럼 매번 달콤하지는 않지만 항상 곁에 있어주는 커피 한 잔에는 우리의 매일이 담겨 있어요.", // Long description for detail page
      images: [
        "/매일의커피사진일.jpg", // Optional: Additional images for gallery below video
        "/매일의커피사진이.jpg",
        "/매일의커피사진삼.jpg",
      ],
      video: "/매일의커피.mp4", // ⚠️ REQUIRED for video projects: Video file path (put video in /public folder, use "/filename.mp4" - NO /public prefix!)
      date: "2024-10-12", // Date when project was completed (format: "YYYY-MM-DD")
    },


  // Copy the template above to add more projects. Example:
  // {
  //   id: 2,
  //   title: "My Second Project",
  //   category: "branding",
  //   image: "/project2-main.jpg",
  //   description: "A branding project for a luxury brand",
  //   fullDescription: "This project involved creating a complete brand identity...",
  //   images: [
  //     "/project2-main.jpg",
  //     "/project2-detail1.jpg",
  //     "/project2-detail2.jpg",
  //   ],
  // },

  // ============================================
  // VIDEO PROJECT TEMPLATE
  // ============================================
  // Template for adding a video project (copy this block and fill in your details):
  // {
  //   id: 6, // ⚠️ IMPORTANT: Each project needs a unique ID number (1, 2, 3, 4, etc.)
  //   title: "My Video Project", // Project title shown on card and detail page
  //   category: "videography", // ⚠️ Must be exactly one of: "UI design", "branding", "videography", "poster", "prints"
  //   image: "/video-thumbnail.jpg", // ⚠️ Thumbnail image for project card (put in /public folder, use "/filename.jpg" - NO /public prefix!)
  //   description: "A short description of your video project", // Brief description (shown on project card)
  //   fullDescription: "Detailed description of your video project. This appears on the project detail page below the video.", // Long description for detail page
  //   images: [
  //     "/video-thumbnail.jpg", // Optional: Additional images for gallery below video
  //     "/behind-the-scenes-1.jpg",
  //   ],
  //   video: "/my-video.mp4", // ⚠️ REQUIRED for video projects: Video file path OR YouTube URL
  //                          // - Local file: "/filename.mp4" (put in /public folder)
  //                          // - YouTube: "https://www.youtube.com/watch?v=VIDEO_ID" or "https://youtu.be/VIDEO_ID"
  // },
  //
  // INSTRUCTIONS FOR VIDEO PROJECTS:
  // 1. For YouTube videos (RECOMMENDED):
  //    - Upload your video to YouTube (can be unlisted)
  //    - Copy the YouTube URL (e.g., "https://www.youtube.com/watch?v=VIDEO_ID")
  //    - Add it to the 'video' field
  //    - Add a thumbnail image to /public folder for the project card
  // 2. For local video files:
  //    - Add your video file to the /public folder (e.g., my-video.mp4)
  //    - Add a thumbnail image to /public folder for the project card
  //    - Add the video path to the 'video' field (e.g., "/my-video.mp4")
  // 3. Copy the template above
  // 4. Set category to "videography"
  // 5. The video will automatically play muted with controls on the detail page (local files) or embed from YouTube
  // 6. You can still add images to the gallery below the video
]

/**
 * Available categories for projects
 * Make sure your project's category matches one of these exactly:
 */
export const categories = ["all", "videography", "poster", "branding", "UI design", "prints"]
