import React, { ComponentType } from 'react';
import PeerData from 'peer-data';
interface InjectedProps {
    peerData: PeerData;
}
export default function withPeerData<BaseProps extends InjectedProps>(WrappedComponent: ComponentType<BaseProps>): React.ForwardRefExoticComponent<React.PropsWithoutRef<Pick<BaseProps, Exclude<keyof BaseProps, "peerData">> & {
    forwardedRef?: ((instance: HTMLElement | null) => void) | React.RefObject<HTMLElement> | null | undefined;
}> & React.RefAttributes<unknown>>;
export {};
