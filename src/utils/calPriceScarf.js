export default function calPriceScarf(userSchool) {
  switch (userSchool) {
    case "دبستان دخترانه فرهنگ":
      return 16000;

    case "دبستان دخترانه مرحمت صائب":
      return 16000;

    case "دبستان دخترانه فضیلت":
      return 16000;

    case "متوسطه دوره دوم دخترانه رازی":
      return 23000;

    case "متوسطه دوره دوم دخترانه الزهرا":
      return 23000;

    case "متوسطه دوره دوم دخترانه تیزهوشان":
      return 23000;

    case "متوسطه دوره دوم دخترانه فاطمیه":
      return 23000;

    case "متوسطه دوره اول دخترانه نمونه اندیشه":
      return 23000;

    default:
      break;
  }
}
