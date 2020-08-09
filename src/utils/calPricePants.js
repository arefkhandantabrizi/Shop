export default function calPricePants(Height, userSchool) {
  let height = parseFloat(Height);
  switch (userSchool) {
    case "دبستان پسرانه شهاب":
      if (height >= 60 && height <= 75) return 32000;
      if (height > 75 && height <= 85) return 34000;
      if (height > 85 && height <= 105) return 36000;
      if (height > 105 && height <= 120) return 37000;
      break;
    case "دبستان پسرانه فرهنگ":
      if (height >= 60 && height <= 75) return 32000;
      if (height > 75 && height <= 85) return 34000;
      if (height > 85 && height <= 105) return 36000;
      if (height > 105 && height <= 120) return 37000;
      break;
    case "دبستان پسرانه صبا":
      if (height >= 60 && height <= 75) return 34000;
      if (height > 75 && height <= 85) return 36000;
      if (height > 85 && height <= 105) return 38000;
      if (height > 105 && height <= 120) return 39000;
      break;
    case "دبستان پسرانه گوهران":
      if (height >= 60 && height <= 75) return 34000;
      if (height > 75 && height <= 85) return 36000;
      if (height > 85 && height <= 105) return 38000;
      if (height > 105 && height <= 120) return 39000;
      break;
    case "دبستان پسرانه امام حسین":
      if (height >= 60 && height <= 75) return 34000;
      if (height > 75 && height <= 85) return 36000;
      if (height > 85 && height <= 105) return 38000;
      if (height > 105 && height <= 120) return 39000;
      break;
    case "دبستان پسرانه فضیلت":
      if (height >= 60 && height <= 75) return 32000;
      if (height > 75 && height <= 85) return 34000;
      if (height > 85 && height <= 105) return 36000;
      if (height > 105 && height <= 120) return 61500;
      break;
    case "دبستان دخترانه فرهنگ":
      if (height >= 60 && height <= 75) return 32000;
      if (height > 75 && height <= 85) return 34000;
      if (height > 85 && height <= 105) return 36000;
      if (height > 105 && height <= 120) return 37000;
      break;

    case "دبستان دخترانه مرحمت صائب":
      if (height >= 60 && height <= 75) return 32000;
      if (height > 75 && height <= 85) return 34000;
      if (height > 85 && height <= 105) return 36000;
      if (height > 105 && height <= 120) return 37000;
      break;

    case "دبستان دخترانه فضیلت":
      if (height >= 60 && height <= 75) return 34000;
      if (height > 75 && height <= 85) return 36000;
      if (height > 85 && height <= 105) return 38000;
      if (height > 105 && height <= 120) return 39000;
      break;

    case "متوسطه دوره دوم دخترانه رازی":
      if (height >= 60 && height <= 105) return 40000;
      if (height > 105 && height <= 110) return 45000;
      if (height > 110 && height <= 120) return 50000;
      break;

    case "متوسطه دوره دوم دخترانه الزهرا":
      if (height >= 60 && height <= 105) return 40000;
      if (height > 105 && height <= 110) return 45000;
      if (height > 110 && height <= 120) return 50000;
      break;

    case "متوسطه دوره دوم دخترانه تیزهوشان":
      if (height >= 60 && height <= 105) return 40000;
      if (height > 105 && height <= 110) return 45000;
      if (height > 110 && height <= 120) return 50000;
      break;

    case "متوسطه دوره اول دخترانه نمونه اندیشه":
      if (height >= 60 && height <= 86) return 40000;
      if (height > 86 && height <= 93) return 45000;
      if (height > 93 && height <= 100) return 50000;
      if (height > 100 && height <= 120) return 55000;
      break;

    case "متوسطه دوره دوم دخترانه فاطمیه":
      if (height >= 60 && height <= 86) return 40000;
      if (height > 86 && height <= 93) return 45000;
      if (height > 93 && height <= 100) return 50000;
      if (height > 100 && height <= 120) return 55000;
      break;

    default:
      break;
  }
}
