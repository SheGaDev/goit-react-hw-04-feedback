const Section = ({
  title,
  children,
}: {
  title: string;
  children: string | JSX.Element | JSX.Element[];
}) => {
  return (
    <section className='ml-[24px] mt-[24px]'>
      <h2 className='mb-3'>
        <b>{title}</b>
      </h2>
      {children}
    </section>
  );
};

export default Section;
