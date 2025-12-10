import { Activity, SlideData } from './types';

export const WELCOME_SLIDES: SlideData[] = [
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVJPZGplKHVUnd-gCNnsSTsyuc1FToOqCdJaYvo8rGgZXnP1xVK3HCes6aHpXzjWYvXNgyL1qiYXVofKBVP_5EYdPPFIV9Cg9BtkMAsevZDFOJ3QBFSb_JbCrqhfpxEeG-GWsBNGG6pquic4nqqzBCOtAU9HHbTiMTqmZPbloEyD6ZjndVzO2VQsmGVGFqmja3s4Wq0ov8McEXmSIss_j2EMwXoOKD68UmX9szmKbzJ_heBGetljd-rN4puu1k7Ve7XBwfHvETnNw",
    title: "Discover Your Passions",
    description: "Personalize your profile by selecting the interests and hobbies you love."
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_KEODNATZ-IuNZenTBVAK1_5qFDiqnpL6nPk9akuqP9odXR2U2vdBTJ9GrAzM601G7xw_3Se8Opybbr8dywqp8MJCWXyu-Ie27-6jR8YxS6IdZmApF5mlljRApNA1lCMDibljytYsupnqUa3LHfu6SP60h68Zy8s5Os_5xbcMrqpMhXUBWbS0-A5_cEyE3YvowzSvveqTLipO0av_MhUt6TjWVjRSbJQ5BoKJcI3ZOAPfvJVV48UJhMBfZRWENcF_eK39fHn_xww",
    title: "Find Your Next Adventure",
    description: "Ficara suggests local activities and groups based on your unique interests."
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeURlEMq2MjgjwJavigoFnbNF6li0Xu74uj_NtcIAAYDGdCw2hXcM6ssmy_gXn_v8_6NoyH6T5MEfiSU8lvefu4L3zAHYbpo-xfKO5W0dzxKL0Ifz5uJXf079MV9clW_dOQwiSBbYP1vR1u6REtTvk83cFxDxzhWrP4lGpL9qnIZUT6TYHvP0g32B-D9WYe2V2mTgvPkq2zl4c-2oVH264J-d3JX4dZ0RJp9ti__n3UDtFCukc-63iYSDvW3Hu278IjKatl22CBM0",
    title: "Connect with Your Community",
    description: "Meet new people, join exciting events, and form real-life connections."
  }
];

export const ACTIVITIES: Activity[] = [
  {
    id: "1",
    category: "Sports",
    title: "Late Night Badminton",
    distance: "1.2 km away",
    timeString: "Tonight at 8 PM",
    dateFull: "Friday, October 27, 2024",
    timeRange: "08:00 PM - 10:00 PM",
    locationName: "City Sports Center",
    address: "45 Sport Ave, Downtown",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBf6ReZ8EC27ELaNtQ_TAJxTrm4v5HIBpdQmN2j9U1NSXYE_jS19c90wOd12ZfQRpWf4T3IBjF8yPetDxrnsRInRl-sqM86E9vCKJBa5bWOrEIqv5rc7mr1RywIcbwyahQwbuQK1GS31BtncCe06bdBJmD-PtAQBmQ5nYNatVbo2HYv6E_ypj0m1HCm03LYErVTAfwPpjCOllqCHPFbsGJZPjhag9GuJBdtZBs206Uj-y6gBQXrZ0WqT1Y1AzMhcugkCv1M7MOvp9Y",
    mapImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAK74HdU20onllKhDKWjqg1YP_Vcszkd4LmkAcMSHXr9oYVpcJeuwuANGSUBVfmeRVHR-KklEBFqDztKMxiAl1MiOURB_XXCFYsbI6foZaih1VuTiDGXV5XqVNdMhQGv4BsMrKfjDpZun35g-DGRTz8kRIqVVtPqqGz2SfyjZsrnAxG8Gh7mh11MWXtN21hKOefcYifES4sRDDyTVqQAEHa8buWdgeUuqREmV9N0WsGNjqykxyVkKHtsmP_N43rvLerO2YtWcsinA8",
    description: "Join us for a casual badminton session! All levels welcome. Rackets available for rent.",
    totalSlots: 5,
    filledSlots: 3,
    participants: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCfZwHgmwcsLni1EtitnsinLh1i-PjRXQdZ8ejnqVF0myuIeP8f1Fp74s6ARDe547ScGW_0Tr5ueNLt-sm0GdaitB77xzOlE-bFrdzcMTOtZ3d0GQfTDzwX5IKAzPZa-8nsE1GYxLdDsPPpAolVq_-UIIeJcVsV-nYaxt8NkdRnYmthg9WWPsQuFzExeZ_yp_Zpb1_dSxx7J5cEL6SAabGR5_SKjeHPNgpP3Bjupt3K6YKtcDe1sr2_bv7ZfYGwasfWhBvsF1QvVcY",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCNkSH3k8_rgI7gGO4CR_i5vbm6Rsx-L_5l4-mmu50-4Qzh-1AUwv2wHnzETVPXmkxgbjFDOT4MIQbTFtFDI2i0LCBC2vl-CHlcdkaEoSmcgAABvq3uBZzh9-oi7VUdRcVpKBdqCdSs-B6RhuAkXCpa0MljgvHswy3YEUJYBFN31DLpwVSucD0XVV_OfSqG2qb6u19lUNPBbrfU9fBVLckmsAT49OsoYB35sl3htioG55xl0ZHs4CB-7V-gDPNYmNgWhxDb7xQyrTM",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTzc3Gcj8co47_ZvKI_ebaz2YHdSynzs1oDnf5M-cl1WsdQ68F_hJsDVnBBfWBaHAqONQTouoU4ShT8uItIyGwgzfoQdBGiPJ9ma2kCtr8CwAjqTLkv1JsVppX3AvjTqtKzAP8mPPfCVCi15hjvDpYf4cdilUaYTf7mSkgczU8XAsIN8lUS_4HKqgRkUAMQPVcekXcKeFnxX-5-VbKIpZArL9yU8bWJMxyrw8DX2ZEZ9_weC6rsHat1z0JtBcLAanhOFyTFi-QKls"
    ],
    host: {
      id: "h1",
      name: "Badminton Club",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfZwHgmwcsLni1EtitnsinLh1i-PjRXQdZ8ejnqVF0myuIeP8f1Fp74s6ARDe547ScGW_0Tr5ueNLt-sm0GdaitB77xzOlE-bFrdzcMTOtZ3d0GQfTDzwX5IKAzPZa-8nsE1GYxLdDsPPpAolVq_-UIIeJcVsV-nYaxt8NkdRnYmthg9WWPsQuFzExeZ_yp_Zpb1_dSxx7J5cEL6SAabGR5_SKjeHPNgpP3Bjupt3K6YKtcDe1sr2_bv7ZfYGwasfWhBvsF1QvVcY",
      joined: "1 year ago"
    },
    coordinates: { top: 35, left: 20 }
  },
  {
    id: "2",
    category: "Food",
    title: "Coffee & Code Session",
    distance: "2.5 km away",
    timeString: "Tomorrow at 10 AM",
    dateFull: "Saturday, October 28, 2024",
    timeRange: "10:00 AM - 12:00 PM",
    locationName: "Brewed Awakening",
    address: "88 Code St, Tech Park",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkcTz4WtN4MmW0uwrb3-sSHp4XCm4glrEJ78g1qYrdo9v-H3cpEfj6Iuf-I3YjTPeoHcCnEDaco0gY5tPBOtltw59f9Ykw410rZWRyHCnVPXe6LXw483VAmr8t4ourm_ekbt07oZ7vE_2-llOv6EJ1MSE0eh_3-45IIcooH6fwyhKSE4O9Rj_2sRjmUannuU4tnpiAJFG6nXJEh7D0EmEgUGSkMU8A9PQW1kVvt00DX7OTq0xKseNZxu_Sl0Zw2lorTtVNnE2VGz0",
    mapImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAK74HdU20onllKhDKWjqg1YP_Vcszkd4LmkAcMSHXr9oYVpcJeuwuANGSUBVfmeRVHR-KklEBFqDztKMxiAl1MiOURB_XXCFYsbI6foZaih1VuTiDGXV5XqVNdMhQGv4BsMrKfjDpZun35g-DGRTz8kRIqVVtPqqGz2SfyjZsrnAxG8Gh7mh11MWXtN21hKOefcYifES4sRDDyTVqQAEHa8buWdgeUuqREmV9N0WsGNjqykxyVkKHtsmP_N43rvLerO2YtWcsinA8",
    description: "Bring your laptop and work on your side projects while enjoying great coffee.",
    totalSlots: 4,
    filledSlots: 2,
    participants: [
       "https://lh3.googleusercontent.com/aida-public/AB6AXuDIcuF1crhwXdp_0RH2LTIcse25xbaBNlrcKqEKLWD6MB81rDCVB94b0ieL57erfce9IeW8x29Acme067zEDH7oHTqnOy-xml7RIgCKzmivvoIcwCU64UIKXAzD2Leu7k8E4MdGnx8Rlod5tkSrIUgesT6hkmE8WZ-RHTpgVMMkEhhiGTK048eB0P4M5sUow6EMEliykxwHEXvmfPzRX2Qz_88rm7tEqp4vp1TrMGVTAN8IKQ-69wjZ-a5CnSVtjmWLGhgPLkEtKZ4",
       "https://lh3.googleusercontent.com/aida-public/AB6AXuBjwo3HBkxdgm5tmJ6ldXW2_wTkCHrLd-9TYs9xJtXsKXJQtfzKXuaYQmu4VZHAILIwBL9Kgizql8eaFXQxppggqg0rKgQJvesrKXD2KnDvS7KxKHSOm3lJWX9QhaJCjKBeKXzcupEF_JaUXFekh9CSJSZrFJMDhulxR8F8syWnBpx9EN3Uu0Z1bJkIq8r8hM_c1ckzZY0mW05BT6XMDeH6WLP9MovahyS6QkjAi97TjEOtIwMjjgIiDfuTCyaPsxRyVJdhaFB9IQU"
    ],
    host: {
      id: "h2",
      name: "Dev Community",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIcuF1crhwXdp_0RH2LTIcse25xbaBNlrcKqEKLWD6MB81rDCVB94b0ieL57erfce9IeW8x29Acme067zEDH7oHTqnOy-xml7RIgCKzmivvoIcwCU64UIKXAzD2Leu7k8E4MdGnx8Rlod5tkSrIUgesT6hkmE8WZ-RHTpgVMMkEhhiGTK048eB0P4M5sUow6EMEliykxwHEXvmfPzRX2Qz_88rm7tEqp4vp1TrMGVTAN8IKQ-69wjZ-a5CnSVtjmWLGhgPLkEtKZ4",
      joined: "3 months ago"
    },
    coordinates: { top: 55, left: 45 }
  },
  {
    id: "3",
    category: "Entertainment",
    title: "Outdoor Movie Night",
    distance: "4.1 km away",
    timeString: "Friday at 7 PM",
    dateFull: "Friday, October 27, 2024",
    timeRange: "07:00 PM - 10:00 PM",
    locationName: "Community Park",
    address: "Park Lane",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzhWx_nt-rT6REOGgJSo1NnmIdAQrAlug-WYC3M__Rb2AGfC5uVX5LKqpW_yzATmOlFgwNiG_A44BG3-ob7l3D5uAUv7k1pS3RB2Cr7BPZa7GQf1wrqiWJHXtwPrV-3SttQfxPXGPsJhpmEE1EGuz9JJVT3SU9xoZtERI6WkxOqGAZFJIRDDJ8yIYB178bvbRwVFlJ_FXcg-zp6pTxVI2NPKQolsW-mExCgMgFduDlT47KW0Tght8gtOxse3gGOiLrZmGRrrjAR9U",
    mapImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAK74HdU20onllKhDKWjqg1YP_Vcszkd4LmkAcMSHXr9oYVpcJeuwuANGSUBVfmeRVHR-KklEBFqDztKMxiAl1MiOURB_XXCFYsbI6foZaih1VuTiDGXV5XqVNdMhQGv4BsMrKfjDpZun35g-DGRTz8kRIqVVtPqqGz2SfyjZsrnAxG8Gh7mh11MWXtN21hKOefcYifES4sRDDyTVqQAEHa8buWdgeUuqREmV9N0WsGNjqykxyVkKHtsmP_N43rvLerO2YtWcsinA8",
    description: "Watching a classic movie under the stars. Bring your own blankets!",
    totalSlots: 10,
    filledSlots: 4,
    participants: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPdOyCxBTYQ8nl90ZCEX3rficzw1wlBIcJY8X5wl4JcIuTiZK8SDg40J9Xwloz_3tclvN5WTS7N8AO5gDQQWtCWv1eDnKGP8pWnvIU4xIZcSGc96vfGKPMN-AnOlzWbLq6gKyHtqDfz4IuOig8Xd2MbbAzQDHUO26ug_nLDtxRtvf6PgCWg6deJevl86VIsx28z-2YOrz_CYZbJ7VP4lvdepH97eiqq8U923_hW3MfGH7akx6cEyoxoqxml3FQ3rU0FBvjo0OLOZk",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDoC9IKY4h4AmiAjwHwdBWel6VypZimi23ZtJoSn1NwKDKQOhdfXfKct3KvDaRKutUnuwdp5fKLET_D8bRoK6MTXLvLafzttSjp-ww-ImvMeeZxyN1ioLB5Moh8zXI7jmyq3XLgLESGhVRSBTrZYyC2NIRp3YQoN4iRSVwCNrv81O88dtJkxcuqApu6fyM8FVpD5_MEnPX51AhpmjB79QAhvo3Qgo9b5ENpmUuWkgTRe8vTcEquyw5ooToI4PmBMytKAvhaecR3xso",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBgX1ANidcumWZGLTC3_YWC9WwllmrVSKgCtL8OE-bpxQwrXHlN6gHiSWSG22Ox08idQmcpe_3r21O1puHlI3mcnczAeDZ2ZSCv3nbHWLtUlAdv_hfFY0lRS78upAgJHlDXKQd3UkXBoJm5Noy8rTxq959k4S3BIXcexIX5YAjFh0O96HZXkdKJWIC82hzPiO3mjMV2ZsqLvWeNssbXalX9sSFi1vAo6LIVJZlkdfVGjfweTqHgKpzxOlCOecxO_uf61UH-BCGDlu0",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB1UeKFQKwsIwl5Gk5zVFMC3HhTiybI3KyVuPeJZKGQXzSqk0cFRERqJrSG069PMJbs84__I0PIAn2X5ObmoIpPlA-ciy1i2hTQYYsZXXtcVlDzTkE2kclJWLu6aXSddYkPtp-AkG4_O_qo_R9-Qc3nc9WHZyMIPKkqaW4DTEYzgpspAXOEot5C0O8zBchKyfg91tscOPs60ok9PXNTtnm88gZk4__iTQS-GqOSUeH4Wu0utPKCFmkomLi-515ORIppJXkMHgnHrx0"
    ],
    host: {
      id: "h3",
      name: "Cinema Club",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPdOyCxBTYQ8nl90ZCEX3rficzw1wlBIcJY8X5wl4JcIuTiZK8SDg40J9Xwloz_3tclvN5WTS7N8AO5gDQQWtCWv1eDnKGP8pWnvIU4xIZcSGc96vfGKPMN-AnOlzWbLq6gKyHtqDfz4IuOig8Xd2MbbAzQDHUO26ug_nLDtxRtvf6PgCWg6deJevl86VIsx28z-2YOrz_CYZbJ7VP4lvdepH97eiqq8U923_hW3MfGH7akx6cEyoxoqxml3FQ3rU0FBvjo0OLOZk",
      joined: "5 months ago"
    },
    coordinates: { top: 25, left: 65 }
  },
  {
    id: "4",
    category: "Sports",
    title: "Morning Tennis Match at City Park",
    distance: "1.5 km away",
    timeString: "Saturday at 8 AM",
    dateFull: "Saturday, October 28, 2024",
    timeRange: "08:00 AM - 10:00 AM",
    locationName: "City Park Tennis Courts",
    address: "123 Park Ave",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhjSguzVgAUAU3yuBw7W5ytNqU76WxLiwY_Q1OBW5loYyMOdVx7PocE4_vDO_oGuhITY3gLVlOdlwAw9dppGR_if3yU1ppew0geffcFk1BaYi5fk9Pz9KIGPHdtt0NbD-_1hp06QA6LwE4val5nFqZaGKfoB0A0UOfwi52KmIex6YeFxkyfibW2LVZTUKKTbPVpuyYiAlQBfzNCP5iEao7kISlcanbl5Cc_SNxryit4Eyb5oXLBGsJjFNkIsb0NkwCW1oK7MEa_Vo",
    mapImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAK74HdU20onllKhDKWjqg1YP_Vcszkd4LmkAcMSHXr9oYVpcJeuwuANGSUBVfmeRVHR-KklEBFqDztKMxiAl1MiOURB_XXCFYsbI6foZaih1VuTiDGXV5XqVNdMhQGv4BsMrKfjDpZun35g-DGRTz8kRIqVVtPqqGz2SfyjZsrnAxG8Gh7mh11MWXtN21hKOefcYifES4sRDDyTVqQAEHa8buWdgeUuqREmV9N0WsGNjqykxyVkKHtsmP_N43rvLerO2YtWcsinA8",
    description: "Let's kick off the weekend with a friendly but competitive game of tennis! Open to all skill levels, from beginners looking to practice to advanced players wanting a good rally. We'll play a few sets of doubles. Please bring your own racket. Balls will be provided.",
    totalSlots: 4,
    filledSlots: 3,
    participants: [
       "https://lh3.googleusercontent.com/aida-public/AB6AXuCwc6JVX9IcOwQ24urMLbl3vYUFKmRohhWjn1gboUp8N6g2jmuA8bfKWX40-cMUEcb4zmLvn_IBT0uqyAKHGdCA9mIcZYaO_lqUA5IYzazXmBp0YohlfGHcYk41INyU8Dma6gU_2ApfEcKMKW2zR67XGBEjyzwcgVr3NkWyb-BAQAxU3OeJQg-A4y5CBpwtWwF7oftX0_MOQnBDXKOv0UF5Vkn98KwVcAbIujcA_iTmLZDvbvvNVmHg4FJwVmoSjCeobb8Rofp1uow",
       "https://lh3.googleusercontent.com/aida-public/AB6AXuA1s-tkknYG2XhTTjPb94i95DVU_D3FJOshHtagupCpYZLamoYDF3Zux5buOXt4aacpdb2XVCejuoMvLmYQUDHRHtB9eVnNsoH7ds7oZ7NzU36AcHoc-Y2uVaBppo-3zsuIJKxoVlziPb1T83oVPhTWHGNcidLyPpotOKTVW9yGrfqxdOvQ8QAXHV9sOd25vJ0HBpXxa3YEEtrY3Wf0R-68IjN513S8S7kbqC5WKYMD6ymLOmgRDC0dxvPvpsCHxMYgmaUI2RHY91c",
       "https://lh3.googleusercontent.com/aida-public/AB6AXuBQ0_fW47s_H11md0JkA_lnAwJ9TPmN8SaRfz2ZV_-n8wYPatHO0uZ14DrsGRl-oMS0o1pUX1hnSlaugqHPdo3VLQfOlu5CKy5Wip-maVMdtK7ne95H_Y7K1G56j449FtbI8AeNeQZIJNkIK3qOQzzqULDrsotnYn4LHxZdncVpNWmsy_j_BXxQqYDgz7lv6thlj0BaYq2hPuDzBioJwX-K4BZNcAJdR4jgEhxB-_687sD1GXPfXpeZ99SoNkx-0OM8GkZP8Y2-lBU"
    ],
    host: {
      id: "h4",
      name: "Sarah Miller",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYKDXbIuRf-dVWUWM8Bbwv9b1rssGXea_abioJm_fXtGYxoLYMCEWN6ekggddM3xmS1UCZ-R70S8eEmuzzsoAYiYadp3PNxX-sevC8FYLSccu9I30cy58J9R8PwJROoow12WUnPZNSwY4t4yrALG4imhNWaumC2WRrKSjD1L0n9NdGweGQZo9WiqWC_ZKu12ybqvg-fcggXBgxYZ5QmSpyqjc5vOkp8gPERRK-AqgOQl_NJ5Qx-42_w-61vvJJIz-knqdVsiI47K8",
      joined: "2 years ago"
    },
    coordinates: { top: 70, left: 30 }
  },
  {
    id: "5",
    category: "Music",
    title: "Summer Music Festival",
    distance: "5 km away",
    timeString: "Sat, Aug 10, 7:00 PM",
    dateFull: "Saturday, August 10, 2024",
    timeRange: "07:00 PM - 11:00 PM",
    locationName: "Central Park",
    address: "Central Park, New York",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBb8xgGVvXtv8ibOvVJhxKl4lw9UpHwo3ggCj2mgh6FJDBHhAiKutjSYz3JFW53nRcdMd9GG01t8eZk0Tmsj1EbEa_bbsdXhhnwTir4Xxkp4yXdK4AmabpWkNO9w_Kq4NIm3D6TyR3EVrLtY4olBOR73xLRB6i-B-NOhTIioa3XQyAasH6j3VrckzRMujwN8qrN7pDELNnartuql6DZwk2OLqTopxx_Yt0pHlnN90bq62zpO-73gMerCjs8vuAeoU2oThdFOpBukQU",
    mapImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAK74HdU20onllKhDKWjqg1YP_Vcszkd4LmkAcMSHXr9oYVpcJeuwuANGSUBVfmeRVHR-KklEBFqDztKMxiAl1MiOURB_XXCFYsbI6foZaih1VuTiDGXV5XqVNdMhQGv4BsMrKfjDpZun35g-DGRTz8kRIqVVtPqqGz2SfyjZsrnAxG8Gh7mh11MWXtN21hKOefcYifES4sRDDyTVqQAEHa8buWdgeUuqREmV9N0WsGNjqykxyVkKHtsmP_N43rvLerO2YtWcsinA8",
    description: "Experience the ultimate summer vibes with live performances from top artists. Food trucks and drinks available.",
    totalSlots: 100,
    filledSlots: 85,
    participants: [],
    host: { id: "h5", name: "City Events", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhyYutZsAhFf9120repm7zJrdkMjcI9VJ-H-DPiIahcQK1tanqkkNW5RTVsrHIXqW7WiqzZd9zg1Q-ABvoP8SGaDBawDW8Bqf2VD6ZWYJQyhpguPY0R818OZRDk6rdNu39oJz_8SY3YHby5kqH4d2F7U58Grk1kHbaJ1eR52SviwvsJdd21wAr6F75vgQyFbaTXBXlvuL2H_JR08oiLoCHoSKazrXjcei9zWitQKHxt1wcBtDcCzwM9K5aGgRHPb9s3_q2WOiGFCg", joined: "Admin" },
    coordinates: { top: 40, left: 80 }
  },
  {
    id: "6",
    category: "Art & Culture",
    title: "Downtown Art Walk",
    distance: "3 km away",
    timeString: "Sun, Aug 11, 1:00 PM",
    dateFull: "Sunday, August 11, 2024",
    timeRange: "01:00 PM - 05:00 PM",
    locationName: "Arts District",
    address: "Main St",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCca6PVb4h3WnaTxBuabyhXtOE1Ew3DbY_55XQRhQvOpewwJpHvYZOVgjT2tNMOYey6ZK_kSbrUBlxNMwqoKfoF5HOHggzaeTy6kgrQZlBF3NkDxE_iG60HCKXYb9p-ygRhUtdXnMeXphkvziOPc-Yy05BHdrjexQmY_PPwM9gNQiOouOX1Qfoctg5cGVbn0sSoHr74HO-PZfWNBZ3VRqTqOMu8GJ_4_Rrk9JoAeUicRv3YKvdp1vGBmmT3pIw0C-2ZJCcAm1DZFj0",
    mapImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAK74HdU20onllKhDKWjqg1YP_Vcszkd4LmkAcMSHXr9oYVpcJeuwuANGSUBVfmeRVHR-KklEBFqDztKMxiAl1MiOURB_XXCFYsbI6foZaih1VuTiDGXV5XqVNdMhQGv4BsMrKfjDpZun35g-DGRTz8kRIqVVtPqqGz2SfyjZsrnAxG8Gh7mh11MWXtN21hKOefcYifES4sRDDyTVqQAEHa8buWdgeUuqREmV9N0WsGNjqykxyVkKHtsmP_N43rvLerO2YtWcsinA8",
    description: "Walk through the city's vibrant art district and visit galleries, studios, and street art installations.",
    totalSlots: 50,
    filledSlots: 12,
    participants: [],
    host: { id: "h6", name: "Art Collective", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhyYutZsAhFf9120repm7zJrdkMjcI9VJ-H-DPiIahcQK1tanqkkNW5RTVsrHIXqW7WiqzZd9zg1Q-ABvoP8SGaDBawDW8Bqf2VD6ZWYJQyhpguPY0R818OZRDk6rdNu39oJz_8SY3YHby5kqH4d2F7U58Grk1kHbaJ1eR52SviwvsJdd21wAr6F75vgQyFbaTXBXlvuL2H_JR08oiLoCHoSKazrXjcei9zWitQKHxt1wcBtDcCzwM9K5aGgRHPb9s3_q2WOiGFCg", joined: "Admin" },
    coordinates: { top: 60, left: 70 }
  }
];