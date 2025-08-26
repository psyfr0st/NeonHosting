
import type { MouseEventHandler } from "react";
import type { IconType } from "react-icons";

import Link from "next/link";
import styled from "styled-components";

type ButtonContentProps = {
  Icon: IconType,
  value: string
};

type ButtonProps = ButtonContentProps & {
  onClick: MouseEventHandler<HTMLButtonElement>,
  className?: string
};

type LinkProps = ButtonContentProps & {
  href: string,
  className?: string
};

function ButtonContent({ Icon, value }: ButtonContentProps) {
  return (<>
    <Icon className="mr-2" /> {value}
  </>);
};


const LinkStyle = styled.div`
  background: linear-gradient(45deg, #ff0000, #ff3333);
  color: black;
  
  border-radius: 9999px;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(255, 0, 0, 0.5);
  }
`;


function DefaultLink({ href, className, ...restProps }: LinkProps) {
  return (
    <Link href={href}>
      <LinkStyle className={className}>
        <ButtonContent {...restProps}/>
      </LinkStyle>
    </Link>
  );
};

function DefaultButton({ onClick, className, ...restProps }: ButtonProps) {
  return (
    <button
      className={`${className} border-2 border-red-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-500/10 transition-all inline-flex items-center justify-center`}
      onClick={onClick}
    >
      <ButtonContent {...restProps}/>
    </button>
  );
};

const LargeLink = styled(DefaultLink)`
  padding: 1rem 2rem;
`;

const MediumLink = styled(DefaultLink)`
  padding: 0.5rem 1rem;
`;

const ButtonForPlan = styled(DefaultButton)`

`;

export { DefaultButton, LargeLink, MediumLink, ButtonForPlan };