"use client"
import AudioPlayer from './components/AudioPlayers';

export default function Home() {


  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <AudioPlayer src={'https://stream-151.zeno.fm/h4pdnrcztmzuv?zs=xZEr-PPTTHSgmnOuU22msg'} />
    </main>
  )
}
