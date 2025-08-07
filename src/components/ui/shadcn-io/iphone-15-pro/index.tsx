import { HTMLAttributes } from 'react';

export interface Iphone15ProProps extends HTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
  src?: string;
  videoSrc?: string;
}

export default function Iphone15Pro({
  width = 433,
  height = 882,
  src,
  videoSrc,
  className = '',
  ...props
}: Iphone15ProProps) {
  const scale = Math.min(width / 433, height / 882);

  return (
    <div
      className={`relative ${className}`}
      style={{
        width: `${433 * scale}px`,
        height: `${882 * scale}px`,
        transform: scale !== 1 ? `scale(${scale})` : undefined,
        transformOrigin: 'top left',
      }}
      {...props}
    >
      <div
        className="absolute inset-0 bg-foreground rounded-[73px]"
        style={{
          width: '430px',
          height: '882px',
          left: '2px',
          top: '0px',
        }}
      />

      <div
        className="absolute bg-foreground rounded-sm"
        style={{
          width: '3px',
          height: '34px',
          left: '0px',
          top: '170px',
        }}
      />

      <div
        className="absolute bg-foreground rounded-sm"
        style={{
          width: '3.5px',
          height: '67px',
          left: '1px',
          top: '233px',
        }}
      />

      <div
        className="absolute bg-foreground rounded-sm"
        style={{
          width: '3.5px',
          height: '67px',
          left: '1px',
          top: '318px',
        }}
      />

      <div
        className="absolute bg-foreground rounded-sm"
        style={{
          width: '3px',
          height: '106px',
          left: '430px',
          top: '279px',
        }}
      />

      <div
        className="absolute bg-foreground border border-foreground dark:border-[#404040] rounded-[74px]"
        style={{
          width: '420px',
          height: '874px',
          left: '6px',
          top: '4px',
        }}
      />

      <div
        className="absolute rounded-full"
        style={{
          width: '5px',
          height: '3px',
          left: '174px',
          top: '5px',
          backgroundColor: 'var(--foreground)',
          opacity: 0.5,
        }}
      />

      <div
        className="absolute rounded-[55.75px] overflow-hidden border border-foreground dark:border-[#404040]"
        style={{
          width: '389.5px',
          height: '843.5px',
          left: '21.25px',
          top: '19.25px',
          borderWidth: '0.5px',
        }}
      >
        {!src && !videoSrc && (
          <div className="w-full h-full bg-black dark:bg-black" />
        )}

        {src && (
          <img
            src={src || '/placeholder.svg'}
            alt="iPhone screen content"
            className="w-full h-full object-cover"
          />
        )}

        {videoSrc && (
          <video
            src={videoSrc}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        )}
      </div>

      <div
        className="absolute rounded-full"
        style={{
          width: '124px',
          height: '37px',
          left: '154px',
          top: '30px',
          backgroundColor: 'rgba(0,0,0,0.9)',
        }}
      >
        <div
          className="absolute rounded-full bg-[#F5F5F5] dark:bg-[#262626]"
          style={{
            width: '21px',
            height: '21px',
            right: '8px',
            top: '8px',
          }}
        >
          <div
            className="absolute rounded-full bg-foreground"
            style={{
              width: '11px',
              height: '11px',
              left: '5px',
              top: '5px',
            }}
          />
        </div>
      </div>
    </div>
  );
}
