import { useState } from "react";

export default function usePasswordToggle() {
    const [visible, setVisible] = useState(false);
    const type = visible ? 'text' : 'password';

    const toggle = () => setVisible(vis => !vis);

    return {type, toggle, visible};
}