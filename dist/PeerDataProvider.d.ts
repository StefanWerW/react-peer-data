import { ReactNode } from 'react';
import { Options } from './useSignaling';
export interface Props {
    locale: string;
    children: ReactNode;
    servers?: RTCConfiguration;
    constraints?: RTCDataChannelInit;
    signaling?: Options;
}
declare function PeerDataProvider({ children, servers, constraints, signaling }: Props): JSX.Element;
export default PeerDataProvider;
