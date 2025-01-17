const LimitContentWidth = ({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames?: string;
}) => {
  return (
    <div className={`max-w-screen-2xl mx-auto ${classNames}`}>{children}</div>
  );
};

export default LimitContentWidth;
