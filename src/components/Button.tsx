import type { ReactNode } from 'react';

type Props = {
    onClick: () => void;
    children: ReactNode;
};

const Button = ({ onClick, children }: Props) => {
    return (
        <button className="border-2 p-7" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
