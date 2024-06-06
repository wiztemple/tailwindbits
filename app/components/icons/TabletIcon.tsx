const TabletIcon = ({ stroke }: { stroke: string }) => {
  return (
    <svg
      width="20"
      height="14"
      className="stroke-current"
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.3 7.85714V6.14286M7.3 13C4.33 13 2.845 13 1.9225 12.1214C1 11.2429 1 9.82857 1 7C1 4.17143 1 2.75714 1.9225 1.87857C2.845 1 4.33 1 7.3 1H12.7C15.67 1 17.155 1 18.0775 1.87857C19 2.75714 19 4.17143 19 7C19 9.82857 19 11.2429 18.0775 12.1214C17.155 13 15.67 13 12.7 13H7.3Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 9.57145L1.4806 9.49516C2.5669 9.32288 3.0862 9.23116 3.3994 8.86173C3.7 8.50859 3.7 8.00545 3.7 7.00002C3.7 5.95087 3.691 5.44859 3.3598 5.09287C3.043 4.75259 2.5228 4.6703 1.4806 4.50487L1 4.42859"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TabletIcon;
