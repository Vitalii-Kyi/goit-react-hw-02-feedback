import { Thumb } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Thumb>
      <h2>{title} </h2>
      {children}
    </Thumb>
  );
};