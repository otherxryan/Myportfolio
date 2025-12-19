export interface Award {
  id: number
  name: string
  organization: string
  year: string
  date: string // Date when award was received (format: "YYYY-MM-DD") - used for sorting
}

/**
 * AWARDS TEMPLATE
 * 
 * To add a new award, copy the template below and fill in your details:
 * 
 * {
 *   id: 1,                                    // Unique number (increment for each award)
 *   name: "Award Name",                       // The name/title of the award
 *   organization: "Organization/Event Name", // The organization or event that gave the award
 *   year: "2024",                             // Year the award was received (display format)
 *   date: "2024-12-15",                       // Date when award was received (format: "YYYY-MM-DD") - used for sorting
 * },
 * 
 * INSTRUCTIONS:
 * 1. Copy the template above
 * 2. Replace the placeholder values with your award information
 * 3. Make sure each award has a unique ID number (1, 2, 3, 4, 5, 6, etc.)
 * 4. The awards will be displayed in a 2x3 grid (2 columns, 3 rows)
 * 5. Add the date field with format "YYYY-MM-DD" (e.g., "2024-12-15") - Awards are automatically sorted by newest first
 */

export const awards: Award[] = [
  // ============================================
  // ADD YOUR AWARDS BELOW
  // ============================================
  
  // Template for adding a new award (copy this block and fill in your details):
  {
    id: 1, // ⚠️ IMPORTANT: Each award needs a unique ID number (1, 2, 3, 4, 5, 6, etc.)
    name: "경기도 광고 홍보제 우수상", // The name/title of the award
    organization: "경기도청", // The organization or event that gave the award
    year: "2023.12.03", // Year the award was received
    date: "2023-12-03", // Date when award was received (format: "YYYY-MM-DD")
  },
  {
    id: 2,
    name: "JUNCTION ASIA 2024 트랙 2등",
    organization: "정션아시아",
    year: "2024.08.14",
    date: "2024-08-14", // Date when award was received (format: "YYYY-MM-DD")
  },
  {
    id: 3,
    name: "폴리텍대학교 벤처 창업 경진대회 금상",
    organization: "한국폴리텍대학",
    year: "2023.11.01",
    date: "2023-11-01", // Date when award was received (format: "YYYY-MM-DD")
  },
  {
    id: 4,
    name: "스마트 틴 앱 챌린지 (STA+C) 우수상",
    organization: "SK플래닛",
    year: "2023.09.26",
    date: "2023-09-26", // Date when award was received (format: "YYYY-MM-DD")
  },
  {
    id: 5,
    name: "제 5회 커피 29초 영화제 우수상",
    organization: "송파구 / 청춘,커피 페스티벌",
    year: "2024.10.12",
    date: "2024-10-12", // Date when award was received (format: "YYYY-MM-DD")
  },
  {
    id: 6,
    name: "제 10회 서울 29초 영화제 우수상",
    organization: "서울특별시 / 한국경제신문",
    year: "2024.12.13",
    date: "2024-12-13", // Date when award was received (format: "YYYY-MM-DD")
  },

  {
    id: 7,
    name: "2023년 학생 자살예방 우수 콘텐츠 공모전 우수상 (생명보험사회공헌재단 이사장상)",
    organization: "교육부 / 생명보험사회공헌재단",
    year: "2023.09.08",
    date: "2023-09-08", // Date when award was received (format: "YYYY-MM-DD")
  },

  // Copy the template above to add more awards. Example:
  // {
  //   id: 7,
  //   name: "Best Design Award",
  //   organization: "Design Excellence Awards",
  //   year: "2023",
  // },
]

