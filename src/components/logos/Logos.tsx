import { ILogos } from "../../interfaces/ILogos";

export function SettingsLogo({
  width = "48",
  height = "48",
  fill = "white",
}: ILogos): JSX.Element {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M83.964 40H77.68C76.849 39.9825 76.0424 39.7163 75.3643 39.2357C74.6862 38.7551 74.1678 38.0822 73.876 37.304L73.856 37.252C73.5173 36.4952 73.4126 35.6545 73.5551 34.8377C73.6977 34.0209 74.081 33.2654 74.656 32.668L79.096 28.228C79.8532 27.4704 80.2786 26.4431 80.2786 25.372C80.2786 24.3009 79.8532 23.2736 79.096 22.516L73.496 16.916C72.7384 16.1588 71.7111 15.7334 70.64 15.7334C69.5689 15.7334 68.5416 16.1588 67.784 16.916L63.344 21.356C62.7466 21.931 61.9911 22.3143 61.1743 22.4569C60.3575 22.5994 59.5168 22.4946 58.76 22.156H58.708C57.9222 21.8634 57.2432 21.3402 56.7599 20.6549C56.2767 19.9697 56.0118 19.1544 56 18.316V12.036C56 10.9656 55.5748 9.93901 54.8179 9.18212C54.061 8.42522 53.0344 8 51.964 8H44.036C42.9656 8 41.939 8.42522 41.1821 9.18212C40.4252 9.93901 40 10.9656 40 12.036V18.316C39.9828 19.1475 39.7167 19.9548 39.2361 20.6335C38.7555 21.3123 38.0825 21.8315 37.304 22.124H37.252C36.4952 22.4626 35.6545 22.5674 34.8377 22.4249C34.0209 22.2823 33.2654 21.899 32.668 21.324L28.228 16.884C27.4704 16.1268 26.4431 15.7014 25.372 15.7014C24.3009 15.7014 23.2736 16.1268 22.516 16.884L16.916 22.484C16.1588 23.2416 15.7334 24.2689 15.7334 25.34C15.7334 26.4111 16.1588 27.4384 16.916 28.196L21.356 32.636C21.931 33.2334 22.3143 33.9889 22.4569 34.8057C22.5994 35.6225 22.4946 36.4632 22.156 37.22V37.272C21.8674 38.0612 21.3463 38.7444 20.6614 39.2314C19.9766 39.7184 19.1602 39.9864 18.32 40H12.036C10.9656 40 9.93901 40.4252 9.18212 41.1821C8.42522 41.939 8 42.9656 8 44.036V51.964C8 53.0344 8.42522 54.061 9.18212 54.8179C9.93901 55.5748 10.9656 56 12.036 56H18.32C19.151 56.0175 19.9576 56.2837 20.6357 56.7643C21.3138 57.2449 21.8322 57.9178 22.124 58.696V58.748C22.4626 59.5048 22.5674 60.3455 22.4249 61.1623C22.2823 61.9791 21.899 62.7346 21.324 63.332L16.884 67.772C16.1268 68.5296 15.7014 69.5569 15.7014 70.628C15.7014 71.6991 16.1268 72.7264 16.884 73.484L22.484 79.084C23.2416 79.8412 24.2689 80.2666 25.34 80.2666C26.4111 80.2666 27.4384 79.8412 28.196 79.084L32.636 74.644C33.2334 74.069 33.9889 73.6857 34.8057 73.5431C35.6225 73.4006 36.4632 73.5053 37.22 73.844L37.272 73.864C38.0581 74.1514 38.7391 74.6694 39.2258 75.3503C39.7126 76.0312 39.9824 76.8432 40 77.68V83.964C40 85.0344 40.4252 86.061 41.1821 86.8179C41.939 87.5748 42.9656 88 44.036 88H51.964C52.494 88 53.0188 87.8956 53.5085 87.6928C53.9982 87.4899 54.4431 87.1927 54.8179 86.8179C55.1927 86.4431 55.4899 85.9982 55.6928 85.5085C55.8956 85.0188 56 84.494 56 83.964V77.68C56.0175 76.849 56.2837 76.0424 56.7643 75.3643C57.2449 74.6862 57.9178 74.1678 58.696 73.876L58.748 73.856C59.5048 73.5173 60.3455 73.4126 61.1623 73.5551C61.9791 73.6977 62.7346 74.081 63.332 74.656L67.772 79.096C68.5296 79.8532 69.5569 80.2786 70.628 80.2786C71.6991 80.2786 72.7264 79.8532 73.484 79.096L79.084 73.496C79.8412 72.7384 80.2666 71.7111 80.2666 70.64C80.2666 69.5689 79.8412 68.5416 79.084 67.784L74.644 63.344C74.069 62.7466 73.6857 61.9911 73.5431 61.1743C73.4006 60.3575 73.5053 59.5168 73.844 58.76L73.864 58.708C74.1546 57.9256 74.6741 57.2489 75.3547 56.7659C76.0353 56.2829 76.8456 56.016 77.68 56H83.964C85.0344 56 86.061 55.5748 86.8179 54.8179C87.5748 54.061 88 53.0344 88 51.964V44.036C88 43.506 87.8956 42.9812 87.6928 42.4915C87.4899 42.0018 87.1927 41.5569 86.8179 41.1821C86.4431 40.8073 85.9982 40.51 85.5085 40.3072C85.0188 40.1044 84.494 40 83.964 40ZM48 60C45.6266 60 43.3065 59.2962 41.3332 57.9776C39.3598 56.6591 37.8217 54.7849 36.9134 52.5922C36.0052 50.3995 35.7675 47.9867 36.2306 45.6589C36.6936 43.3311 37.8365 41.1929 39.5147 39.5147C41.1929 37.8365 43.3311 36.6936 45.6589 36.2306C47.9867 35.7675 50.3995 36.0052 52.5922 36.9134C54.7849 37.8217 56.6591 39.3598 57.9776 41.3332C59.2962 43.3065 60 45.6266 60 48C60 51.1826 58.7357 54.2348 56.4853 56.4853C54.2348 58.7357 51.1826 60 48 60Z"
        fill={fill}
      />
    </svg>
  );
}

export function ShieldLogo({
  width = "48",
  height = "48",
  fill = "white",
}: ILogos): JSX.Element {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.6192 14.9627C36.5322 16.9731 30.811 19.0361 20.2808 19.7476C17.7326 19.9197 16.0695 21.8887 16.1413 23.86C16.5401 34.8024 17.8051 45.6868 20.2212 54.6152C22.694 63.7532 26.1386 69.9516 30.2188 72.6716C36.646 76.9568 41.9348 80.6724 45.482 83.2152C46.9788 84.288 49.0212 84.288 50.5176 83.2152C54.0648 80.6724 59.354 76.9568 65.7812 72.6716C69.8612 69.9516 73.306 63.7532 75.7788 54.6156C78.1948 45.6872 79.46 34.8026 79.8584 23.86C79.9304 21.8887 78.2672 19.9197 75.7192 19.7476C65.1888 19.0361 59.4676 16.9731 55.3808 14.9627C54.2132 14.3884 53.3104 13.9099 52.5692 13.5169C50.5408 12.4418 49.722 12.0078 48 12.0078C46.2776 12.0078 45.4588 12.4418 43.4308 13.5169C42.6896 13.9099 41.7868 14.3884 40.6192 14.9627ZM38.7451 6.91297C41.2084 5.57825 44.1072 4.00781 48 4.00781C51.8928 4.00781 54.7912 5.57825 57.2548 6.91301C57.8284 7.22377 58.3784 7.52177 58.912 7.78421C62.012 9.30917 66.7096 11.1206 76.2584 11.7658C82.5264 12.1893 88.1032 17.2919 87.8532 24.1513C87.442 35.4344 86.1332 46.978 83.5008 56.7052C80.9252 66.2236 76.8468 74.9096 70.2188 79.3284C63.88 83.554 58.6668 87.2168 55.1788 89.7172C50.896 92.7876 45.104 92.7876 40.8212 89.7172C37.3332 87.2168 32.1197 83.554 25.7811 79.3284C19.153 74.9096 15.0747 66.2236 12.499 56.7052C9.86664 46.9776 8.55776 35.4341 8.14664 24.1513C7.89668 17.2919 13.4733 12.1893 19.7415 11.7658C29.2902 11.1206 33.9878 9.30917 37.0879 7.78421C37.6214 7.52177 38.1715 7.22377 38.7451 6.91297Z"
        fill="url(#paint0_linear_686_6)"
      />
      <circle cx="48" cy="47.9997" r="20.76" fill="#689E30" />
      <path
        d="M48 68.7012C36.5841 68.7012 27.2986 59.4157 27.2986 47.9997C27.2986 36.5838 36.5841 27.2983 48 27.2983C59.4159 27.2983 68.7014 36.5838 68.7014 47.9997C68.7014 59.4157 59.4159 68.7012 48 68.7012ZM48 30.9012C38.5711 30.9012 30.9014 38.5708 30.9014 47.9997C30.9014 57.4287 38.5711 65.0983 48 65.0983C57.4289 65.0983 65.0986 57.4287 65.0986 47.9997C65.0986 38.5708 57.4289 30.9012 48 30.9012Z"
        fill="#689E30"
      />
      <path
        d="M61.711 62.8033C61.0486 62.8033 60.4116 62.4363 60.0994 61.8035C57.8002 57.1755 53.1638 54.2983 48 54.2983C42.8363 54.2983 38.1999 57.1713 35.9006 61.8035C35.4577 62.6936 34.3777 63.0564 33.4875 62.6135C32.5974 62.1705 32.2346 61.0905 32.6775 60.2003C35.5885 54.3405 41.461 50.6997 48 50.6997C54.5391 50.6997 60.4116 54.3405 63.3225 60.2003C63.7655 61.0905 63.4027 62.1705 62.5125 62.6135C62.2552 62.74 61.981 62.8033 61.711 62.8033Z"
        fill="white"
      />
      <path
        d="M48.0001 54.2985C43.0388 54.2985 39.0015 50.2611 39.0015 45.2999C39.0015 40.3386 43.0388 36.3013 48.0001 36.3013C52.9613 36.3013 56.9987 40.3386 56.9987 45.2999C56.9987 50.2611 52.9613 54.2985 48.0001 54.2985ZM48.0001 39.8999C45.0216 39.8999 42.6001 42.3214 42.6001 45.2999C42.6001 48.2783 45.0216 50.6999 48.0001 50.6999C50.9785 50.6999 53.4001 48.2783 53.4001 45.2999C53.4001 42.3214 50.9785 39.8999 48.0001 39.8999Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_686_6"
          x1="8.16"
          y1="48"
          x2="87.84"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#689E30" />
          <stop offset="1" stopColor="#7CB342" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function TrashCanLogo({
  width = "48",
  height = "48",
  fill = "black",
}: ILogos): JSX.Element {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_690_18)">
        <path
          d="M16.6113 87.1369C17.0546 92.1534 21.2565 95.9998 26.2938 95.9998H69.7044C74.7403 95.9998 78.9437 92.1534 79.3871 87.1369L84.195 24.1504H11.8035L16.6113 87.1369ZM61.7218 41.5941C61.7887 40.4923 62.7343 39.6536 63.8362 39.7206C64.9382 39.7875 65.7753 40.7348 65.7099 41.835L63.8107 79.7539C63.7438 80.8556 62.7982 81.693 61.6961 81.6259C60.5943 81.5605 59.7557 80.6134 59.8226 79.513L61.7218 41.5941ZM46.002 41.7137C46.002 40.6103 46.8967 39.7172 48.0002 39.7172C49.1036 39.7172 49.9982 40.6103 49.9982 41.7137V79.6341C49.9982 80.7375 49.1036 81.6306 48.0002 81.6306C46.8967 81.6306 46.002 80.7375 46.002 79.6341V41.7137ZM32.162 39.7206C33.2638 39.6536 34.2095 40.4923 34.2767 41.5941L36.1773 79.513C36.2443 80.6134 35.4056 81.5605 34.3038 81.6259C33.2034 81.6928 32.2562 80.8556 32.1892 79.7539L30.2885 41.835C30.2216 40.7348 31.0601 39.7875 32.162 39.7206Z"
          fill="black"
        />
        <path
          d="M82.3341 12.0969C82.3341 12.0969 75.9444 11.0349 74.2078 10.5071C72.6514 10.0335 59.0588 7.9635 59.0588 7.9635L58.5484 4.34531C58.1978 1.84819 56.1533 0 53.7454 0H47.9983H42.2513C39.8466 0 37.8023 1.84819 37.4483 4.34531L36.9381 7.9635C36.9381 7.9635 23.3501 10.0333 21.7922 10.5071C20.0558 11.0349 13.6628 12.0969 13.6628 12.0969C11.727 12.6309 10.3748 14.4697 10.3748 16.5712V20.6824H47.9985H85.6253V16.5712C85.6253 14.4697 84.273 12.6309 82.3341 12.0969ZM51.8096 7.2795H44.1904C43.5143 7.2795 42.9656 6.73106 42.9656 6.05475C42.9656 5.37844 43.5143 4.83 44.1904 4.83H51.8096C52.4858 4.83 53.0344 5.37844 53.0344 6.05475C53.0344 6.73106 52.4858 7.2795 51.8096 7.2795Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_690_18">
          <rect width="96" height="96" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function ListCanLogo({
  width = "48",
  height = "48",
  fill = "black",
}: ILogos): JSX.Element {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M266.667 200.022L700 200.046M266.667 400.023L700 400.05M266.667 600.023L700 600.05M116.667 200H117M116.667 400H117M116.667 600H117M133.333 200C133.333 209.205 125.871 216.667 116.667 216.667C107.462 216.667 100 209.205 100 200C100 190.795 107.462 183.333 116.667 183.333C125.871 183.333 133.333 190.795 133.333 200ZM133.333 400C133.333 409.203 125.871 416.667 116.667 416.667C107.462 416.667 100 409.203 100 400C100 390.797 107.462 383.333 116.667 383.333C125.871 383.333 133.333 390.797 133.333 400ZM133.333 600C133.333 609.203 125.871 616.667 116.667 616.667C107.462 616.667 100 609.203 100 600C100 590.797 107.462 583.333 116.667 583.333C125.871 583.333 133.333 590.797 133.333 600Z"
        stroke="black"
        stroke-width="66.6667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function ClocksLogo({
  width = "48",
  height = "48",
  fill = "black",
}: ILogos): JSX.Element {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M47.844 7.50026C26.3012 7.58643 8.9142 25.1161 9.00035 46.6559C9.08651 68.1958 26.6132 85.5858 48.156 85.4996C69.6929 85.4135 87.0859 67.8838 86.9997 46.344C86.9136 24.8041 69.3839 7.4141 47.844 7.50026ZM47.8114 78.082C30.4145 78.1515 16.2552 64.1051 16.1856 46.7082C16.116 29.3113 30.1625 15.152 47.5594 15.0825C64.9532 15.0129 79.1155 29.0594 79.1851 46.4562C79.2547 63.8531 65.2052 78.0124 47.8114 78.082ZM56.7975 48.3578L47.8576 48.3935L47.7972 33.2977C47.7907 31.6597 46.4564 30.333 44.8184 30.3395C43.1804 30.3461 41.8537 31.6804 41.8603 33.3214L41.9325 51.3843C41.9391 53.0252 43.2734 54.3459 44.9144 54.3393L56.8213 54.2917C58.4623 54.2852 59.7859 52.9539 59.7794 51.3129C59.7728 49.6749 58.4385 48.3512 56.7975 48.3578Z"
        fill="#7CB342"
      />
    </svg>
  );
}
