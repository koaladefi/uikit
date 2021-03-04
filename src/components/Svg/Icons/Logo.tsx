import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <circle cx="16" cy="16" r="16" fill="#64C6EB" />
      <g>
        <path d="M13.76,8.72a6.31,6.31,0,0,0-3.49-4.15C7.46,3.45,3.54,2.85.92,4.79s.94,8.68,3.29,9,6.06-1,8.9,1.64S14.13,9.81,13.76,8.72Z" transform="translate(0 -3.53)" fill="#9c9b9b" />
        <path d="M11.65,8.27C10.72,6,6.45,4.91,4,5.92s.55,5.23,1.37,5.83a8.68,8.68,0,0,0,4.31,1C10.34,12.49,11.9,8.86,11.65,8.27Z" transform="translate(0 -3.53)" fill="#706f6e" />
      </g>
      <g>
        <path d="M18.24,8.72a6.31,6.31,0,0,1,3.49-4.15c2.81-1.12,6.73-1.72,9.35.22s-.94,8.68-3.29,9-6.06-1-8.9,1.64S17.87,9.81,18.24,8.72Z" transform="translate(0 -3.53)" fill="#a7a5a5" />
        <path d="M20.35,8.27c.93-2.24,5.2-3.36,7.7-2.35s-.55,5.23-1.37,5.83a8.68,8.68,0,0,1-4.31,1C21.66,12.49,20.1,8.86,20.35,8.27Z" transform="translate(0 -3.53)" fill="#868686" />
      </g>
      <g>
        <path d="M16.09,30.64c6.9,0,15.25-5.07,13.53-12.15-.58-2.41-1-5.19-1-5.19a8.78,8.78,0,0,0-8.78-8.78,34.14,34.14,0,0,1-3.76.35,34.14,34.14,0,0,1-3.75-.35A8.78,8.78,0,0,0,3.52,13.3s-.45,2.78-1,5.19C.77,25.57,9.12,30.64,16,30.64Z" transform="translate(0 -3.53)" fill="#f2f2f2" />
        <path d="M16.05,4.87a33.85,33.85,0,0,1-3.75-.35A8.78,8.78,0,0,0,3.52,13.3s-.45,2.78-1,5.19C.77,25.57,9.12,30.64,16,30.64h0Z" transform="translate(0 -3.53)" fill="#fff" />
      </g>
      <g>
        <g>
          <path d="M9.09,17.88a.87.87,0,0,1-.95-.56c-.1-.36.11-.84.49-.86a.86.86,0,0,1,.94.58A.68.68,0,0,1,9.09,17.88Zm0-1.12a.21.21,0,1,0,.2.21A.2.2,0,0,0,9.1,16.76Z" transform="translate(0 -3.53)" fill="#585857" />
          <path d="M22.19,17a.87.87,0,0,1,.95-.58c.37,0,.58.5.48.86a.87.87,0,0,1-.95.56A.69.69,0,0,1,22.19,17Zm.88-.07a.2.2,0,1,0,.19-.21A.2.2,0,0,0,23.07,17Z" transform="translate(0 -3.53)" fill="#585857" />
        </g>
        <g>
          <path d="M19.07,25.63c0-1.89-3-.29-3-1.48,0,1.19-3-.41-3,1.48a2.84,2.84,0,0,0,3,3A2.84,2.84,0,0,0,19.07,25.63Z" transform="translate(0 -3.53)" fill="#bdbcbc" />
          <path d="M19,25.29c-.37-1.34-3,0-3-1.14,0,1.1-2.57-.18-3,1.1,0,.11,1,.95,3,.95S19.05,25.39,19,25.29Z" transform="translate(0 -3.53)" fill="#cdcccc" />
          <path d="M16.05,24.16h0c0,1.19-3-.41-3,1.48a2.84,2.84,0,0,0,3,3h0Z" transform="translate(0 -3.53)" fill="#b3b3b3" />
          <path d="M16.05,24.16h0c0,1.1-2.57-.18-3,1.1,0,.11,1,.95,3,.95Z" transform="translate(0 -3.53)" fill="#c3c2c2" />
        </g>
        <g>
          <path d="M16.05,15.07a3.36,3.36,0,0,1,1.39.3,3.8,3.8,0,0,1,1.9,4.52v.05a3.09,3.09,0,0,0-.09,1.35h0a2.7,2.7,0,0,1-.09,1.2,3.19,3.19,0,0,1-3,2.27H16a3.2,3.2,0,0,1-3-2.27,2.7,2.7,0,0,1-.08-1.2h0a3.42,3.42,0,0,0-.09-1.35l-.09-.31a3.9,3.9,0,0,1,0-2.22,3.16,3.16,0,0,1,3-2.34Z" transform="translate(0 -3.53)" fill="#4d4d4c" />
          <path d="M16.05,15.07h-.3a3.16,3.16,0,0,0-3,2.34,3.9,3.9,0,0,0,0,2.22l.09.31a3.42,3.42,0,0,1,.09,1.35,2.7,2.7,0,0,0,.08,1.2,3.2,3.2,0,0,0,3,2.27h.08Z" transform="translate(0 -3.53)" fill="#585857" />
        </g>
      </g>
    </Svg>
  );
};

export default Icon;