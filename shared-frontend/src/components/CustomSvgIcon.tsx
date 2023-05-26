interface CustomSvgIconProps {
  icon: string;
}

export default function CustomSvgIcon({
  icon,
  ...props
}: CustomSvgIconProps & JSX.IntrinsicElements["img"]) {
  return <img src={icon} alt="icon" {...props} />;
}
