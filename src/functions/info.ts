import { message } from "antd";

type NotificationType = "info" | "success" | "error" | "warning";

export const massage = (
  content: string,
  type: NotificationType = "info"
): void => {
  switch (type) {
    case "success":
      message.success(content);
      break;
    case "error":
      message.error(content);
      break;
    case "warning":
      message.warning(content);
      break;
    case "info":
    default:
      message.info(content);
      break;
  }
};
