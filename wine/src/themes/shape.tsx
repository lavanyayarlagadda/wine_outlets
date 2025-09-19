import palette from "./palette";

const shape = {
  baseBorderRadius: 8,
  borderRadius: "16px",
  borderRadiuspx: "8px",
  borderRadius12: "12px",
  dashedRed: `1px dashed ${palette.primary.dark}`,
  borderRed: `1px solid ${palette.primary.dark}`,
  borderSuccess: `1px solid ${palette.success.main}`,
  borderWhiteMain: `1px solid ${palette.white.main}`,
  borderWidthWhiteMain: `2px solid ${palette.white.main}`,
  borderBlue: "2px solid blue",
  borderMain: `2px solid ${palette.primary.dark}`,
  borderGrey2px: `2px solid ${palette.success.main}`,
  borderGreyLight: `1px solid ${palette.grey.light}`,

  borderRed2px: `2px solid ${palette.primary.dark}`,
  borderWarning: `2px solid ${palette.warning.light}`,
};

export default shape;
