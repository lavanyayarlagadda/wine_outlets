export interface SlideData {
  id: string;
  order?: number;
  tagText?: string;
  tagActionText?: string;
  tagActionUrl?: string;
  title?: string;
  subtitle?: string;
  backgroundMedia?: {
    type: "image" | "video" | string;
    url: string;
  };
  firstBtnText?: string;
  secondBtnText?: string;
  firstBtnAction?: string;
  secondBtnAction?: string;
}
