/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/sections/Hero';
import LoveStory from './components/sections/LoveStory';
import EventDetails from './components/sections/EventDetails';
import LiveStream from './components/sections/LiveStream';
import DressCode from './components/sections/DressCode';
import Footer from './components/sections/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-off-white font-sans selection:bg-gold/30 selection:text-olive-dark">
      <Hero />
      <LoveStory />
      <EventDetails />
      <LiveStream />
      <DressCode />
      <Footer />
    </main>
  );
}
