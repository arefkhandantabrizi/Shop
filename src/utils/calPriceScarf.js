export default function calPriceScarf(userSchool) {
  switch (userSchool) {
    case "دبستان دخترانه فرهنگ":
      return 16000;

    case "دبستان دخترانه مرحمت صائب":
      return 16000;

    case "دبستان دخترانه فضیلت":
      return 16000;

    case "دبیرستان دخترانه رازی":
      return 23000;

    default:
      break;
  }
}
