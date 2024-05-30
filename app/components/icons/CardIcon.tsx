const CardIcon = ({ fill }: { fill: string }) => {
  return (
    <svg
      width="19"
      height="15" className="fill-current"
      viewBox="0 0 19 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.96875 0C2.18139 0 1.42628 0.32924 0.869527 0.915291C0.312778 1.50134 0 2.2962 0 3.125V11.875C0 12.7038 0.312778 13.4987 0.869527 14.0847C1.42628 14.6708 2.18139 15 2.96875 15H16.0312C16.8186 15 17.5737 14.6708 18.1305 14.0847C18.6872 13.4987 19 12.7038 19 11.875V3.125C19 2.2962 18.6872 1.50134 18.1305 0.915291C17.5737 0.32924 16.8186 0 16.0312 0H2.96875ZM1.1875 3.125C1.1875 2.62772 1.37517 2.15081 1.70922 1.79917C2.04327 1.44754 2.49633 1.25 2.96875 1.25H16.0312C16.5037 1.25 16.9567 1.44754 17.2908 1.79917C17.6248 2.15081 17.8125 2.62772 17.8125 3.125V11.875C17.8125 12.3723 17.6248 12.8492 17.2908 13.2008C16.9567 13.5525 16.5037 13.75 16.0312 13.75H2.96875C2.49633 13.75 2.04327 13.5525 1.70922 13.2008C1.37517 12.8492 1.1875 12.3723 1.1875 11.875V3.125ZM2.96875 2.5C2.81128 2.5 2.66026 2.56585 2.54891 2.68306C2.43756 2.80027 2.375 2.95924 2.375 3.125C2.375 3.29076 2.43756 3.44973 2.54891 3.56694C2.66026 3.68415 2.81128 3.75 2.96875 3.75H8.90625C9.06372 3.75 9.21475 3.68415 9.3261 3.56694C9.43744 3.44973 9.5 3.29076 9.5 3.125C9.5 2.95924 9.43744 2.80027 9.3261 2.68306C9.21475 2.56585 9.06372 2.5 8.90625 2.5H2.96875ZM2.96875 5C2.81128 5 2.66026 5.06585 2.54891 5.18306C2.43756 5.30027 2.375 5.45924 2.375 5.625C2.375 5.79076 2.43756 5.94973 2.54891 6.06694C2.66026 6.18415 2.81128 6.25 2.96875 6.25H12.4688C12.6262 6.25 12.7772 6.18415 12.8886 6.06694C12.9999 5.94973 13.0625 5.79076 13.0625 5.625C13.0625 5.45924 12.9999 5.30027 12.8886 5.18306C12.7772 5.06585 12.6262 5 12.4688 5H2.96875ZM3.5625 8.75C3.24756 8.75 2.94551 8.8817 2.72281 9.11612C2.50011 9.35054 2.375 9.66848 2.375 10V11.25C2.375 11.5815 2.50011 11.8995 2.72281 12.1339C2.94551 12.3683 3.24756 12.5 3.5625 12.5H8.3125C8.62744 12.5 8.92949 12.3683 9.15219 12.1339C9.37489 11.8995 9.5 11.5815 9.5 11.25V10C9.5 9.66848 9.37489 9.35054 9.15219 9.11612C8.92949 8.8817 8.62744 8.75 8.3125 8.75H3.5625Z"
        fill={fill}
      />
    </svg>
  );
};

export default CardIcon;
