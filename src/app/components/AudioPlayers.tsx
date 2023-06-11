import { useEffect, useRef, useState } from 'react';
import { Howl } from 'howler';
import { Stream } from '../interfaces/AudioStream';

const AudioPlayer = ({ src }: Stream) => {
    const sound = useRef<Howl | null>(null);
    const [liveStream, setLiveStream] = useState(false);

    useEffect(() => {
        sound.current = new Howl({
            src: [src],
            html5: true,
        });

        return () => {
            if (sound.current) {
                sound.current.stop();
                sound.current.unload();
            }
        };
    }, [src]);

    const play = () => {
        if (sound.current) {
            setLiveStream(true);
            sound.current.play();
        }
    };

    const pause = () => {
        if (sound.current) {
            setLiveStream(false);
            sound.current.pause();
        }
    };

    return (
        <div className='bg-gray-600/[.15] bg-opacity-30 backdrop-blur-xl p-10 rounded-3xl'>
            <div className='font-extrabold text-6xl text-white flex'>
                Radio Amboró
                {liveStream ? <div className='bg-white/[.65] bg-opacity-30 backdrop-blur-xl p-2 h-8 rounded-3xl text-xs text-red-500 flex items-center'>
                    Streaming
                    <div className="ml-1">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                    </div>
                </div> : <></>}
            </div>
            <div className="flex gap-4 mt-5 ">
                <button className='bg-white/[.45] bg-opacity-30 backdrop-blur-xl rounded-3xl h-12 text-black/80' onClick={play}><span className='m-6 text-2xl font-bold'>Reproducir</span></button>
                <button className='bg-white/[.45] bg-opacity-30 backdrop-blur-xl rounded-3xl h-12 text-black/80' onClick={pause}><span className='m-6 text-2xl font-bold'>Pausar</span></button>
            </div>
        </div>
    );
};

export default AudioPlayer;
