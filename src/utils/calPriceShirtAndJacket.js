export default function calPriceShirtAndJacket(Height, userSchool) {
  let height = parseFloat(Height);
  switch (userSchool) {
    case "دبستان پسرانه شهاب":
      if (height >= 0 && height <= 58) return 51500;
      if (height > 58 && height <= 65) return 55000;
      if (height > 65 && height <= 73) return 61500;
      if (height > 73 && height <= 75) return 62500;
      break;
    case "دبستان پسرانه فرهنگ":
      if (height >= 0 && height <= 58) return 51500;
      if (height > 58 && height <= 65) return 55000;
      if (height > 65 && height <= 73) return 61500;
      if (height > 73 && height <= 75) return 62500;
      break;
    case "دبستان پسرانه صبا":
      if (height >= 0 && height <= 58) return 55000;
      if (height > 58 && height <= 65) return 58500;
      if (height > 65 && height <= 73) return 63000;
      if (height > 73 && height <= 75) return 64000;
      break;
    case "دبستان پسرانه گوهران":
      if (height >= 0 && height <= 58) return 55000;
      if (height > 58 && height <= 65) return 58500;
      if (height > 65 && height <= 73) return 63000;
      if (height > 73 && height <= 75) return 64000;
      break;
    case "دبستان پسرانه امام حسین":
      if (height >= 0 && height <= 58) return 60500;
      if (height > 58 && height <= 65) return 66500;
      if (height > 65 && height <= 73) return 75000;
      if (height > 73 && height <= 75) return 76000;
      break;
    case "دبستان پسرانه فضیلت":
      if (height >= 0 && height <= 58) return 53000;
      if (height > 58 && height <= 65) return 56500;
      if (height > 65 && height <= 73) return 61000;
      if (height > 73 && height <= 75) return 62000;
      break;
    case "دبستان دخترانه فرهنگ":
      if (height >= 0 && height <= 75) return 53500;
      if (height > 75 && height <= 85) return 57000;
      if (height > 85 && height <= 95) return 60500;
      if (height > 95 && height <= 120) return 61500;
      break;

    case "دبستان دخترانه مرحمت صائب":
      if (height >= 0 && height <= 75) return 53500;
      if (height > 75 && height <= 85) return 57000;
      if (height > 85 && height <= 95) return 60500;
      if (height > 95 && height <= 120) return 61500;
      break;

    case "دبستان دخترانه فضیلت":
      if (height >= 0 && height <= 75) return 54000;
      if (height > 75 && height <= 85) return 57500;
      if (height > 85 && height <= 95) return 61000;
      if (height > 95 && height <= 120) return 62000;
      break;

    case "متوسطه دوره دوم دخترانه رازی":
      if (height >= 0 && height <= 101) return 71000;
      if (height > 101 && height <= 108) return 77000;
      if (height > 108 && height <= 115) return 83000;
      if (height > 115 && height <= 120) return 84000;
      break;

    case "متوسطه دوره دوم دخترانه الزهرا":
      if (height >= 0 && height <= 101) return 71000;
      if (height > 101 && height <= 108) return 77000;
      if (height > 108 && height <= 115) return 83000;
      if (height > 115 && height <= 120) return 84000;
      break;

    case "متوسطه دوره دوم دخترانه تیزهوشان":
      if (height >= 0 && height <= 101) return 71000;
      if (height > 101 && height <= 108) return 77000;
      if (height > 108 && height <= 115) return 83000;
      if (height > 115 && height <= 120) return 84000;
      break;

    case "متوسطه دوره اول دخترانه نمونه اندیشه":
      if (height >= 0 && height <= 95) return 70000;
      if (height > 95 && height <= 105) return 76000;
      if (height > 105 && height <= 115) return 82000;
      if (height > 115 && height <= 120) return 87000;
      break;

    case "متوسطه دوره دوم دخترانه فاطمیه":
      if (height >= 0 && height <= 95) return 70000;
      if (height > 95 && height <= 105) return 76000;
      if (height > 105 && height <= 115) return 82000;
      if (height > 115 && height <= 120) return 87000;
      break;

    default:
      break;
  }
}
