export default function calPriceShirtAndJacket(Height, userSchool) {
  let height = parseFloat(Height);
  switch (userSchool) {
    case "دبستان پسرانه شهاب":
      if (height >= 45 && height <= 58) return 50500;
      if (height > 58 && height <= 65) return 54000;
      if (height > 65 && height <= 73) return 60500;
      if (height > 73 && height <= 75) return 61500;
      break;
    case "دبستان پسرانه فرهنگ":
      if (height >= 45 && height <= 58) return 50500;
      if (height > 58 && height <= 65) return 54000;
      if (height > 65 && height <= 73) return 60500;
      if (height > 73 && height <= 75) return 61500;
      break;
    case "دبستان پسرانه صبا":
      if (height >= 45 && height <= 58) return 54000;
      if (height > 58 && height <= 65) return 57500;
      if (height > 65 && height <= 73) return 62000;
      if (height > 73 && height <= 75) return 63000;
      break;
    case "دبستان پسرانه گوهران":
      if (height >= 45 && height <= 58) return 54000;
      if (height > 58 && height <= 65) return 57500;
      if (height > 65 && height <= 73) return 62000;
      if (height > 73 && height <= 75) return 63000;
      break;
    case "دبستان پسرانه امام حسین":
      if (height >= 45 && height <= 58) return 59500;
      if (height > 58 && height <= 65) return 65500;
      if (height > 65 && height <= 73) return 74000;
      if (height > 73 && height <= 75) return 75000;
      break;
    case "دبستان پسرانه فضیلت":
      if (height >= 45 && height <= 58) return 52000;
      if (height > 58 && height <= 65) return 55500;
      if (height > 65 && height <= 73) return 60000;
      if (height > 73 && height <= 75) return 61000;
      break;
    case "دبستان دخترانه فرهنگ":
      if (height >= 61 && height <= 75) return 52500;
      if (height > 75 && height <= 85) return 56000;
      if (height > 85 && height <= 95) return 59500;
      if (height > 95 && height <= 120) return 60500;
      break;

    case "دبستان دخترانه مرحمت صائب":
      if (height >= 61 && height <= 75) return 52500;
      if (height > 75 && height <= 85) return 56000;
      if (height > 85 && height <= 95) return 59500;
      if (height > 95 && height <= 120) return 60500;
      break;

    case "دبستان دخترانه فضیلت":
      if (height >= 61 && height <= 75) return 53000;
      if (height > 75 && height <= 85) return 56500;
      if (height > 85 && height <= 95) return 60000;
      if (height > 95 && height <= 120) return 61000;
      break;

    case "متوسطه دوره دوم دخترانه رازی":
      if (height >= 61 && height <= 101) return 70000;
      if (height > 101 && height <= 108) return 76000;
      if (height > 108 && height <= 115) return 82000;
      if (height > 115 && height <= 120) return 83000;
      break;

    case "متوسطه دوره دوم دخترانه الزهرا":
      if (height >= 61 && height <= 101) return 70000;
      if (height > 101 && height <= 108) return 76000;
      if (height > 108 && height <= 115) return 82000;
      if (height > 115 && height <= 120) return 83000;
      break;

    case "متوسطه دوره دوم دخترانه تیزهوشان":
      if (height >= 61 && height <= 101) return 70000;
      if (height > 101 && height <= 108) return 76000;
      if (height > 108 && height <= 115) return 82000;
      if (height > 115 && height <= 120) return 83000;
      break;

    default:
      break;
  }
}
