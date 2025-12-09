
// LaylaX Dashboard - EPIC BLACK-GOLD Version
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './components/ui/card';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mo', value: 18 },
  { name: 'Di', value: 30 },
  { name: 'Mi', value: 46 },
  { name: 'Do', value: 54 },
  { name: 'Fr', value: 70 },
  { name: 'Sa', value: 88 },
  { name: 'So', value: 104 },
];

export default function LaylaXDashboard() {
  return (
    <div className="min-h-screen bg-black text-gold font-mono p-6 space-y-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center tracking-wide"
      >
        LaylaX Core Spawn Dashboard
      </motion.h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { title: 'Aktive Instanzen', value: 46 },
          { title: 'Creator im Einsatz', value: 18 },
          { title: 'Telegram Hits/Tag', value: 627 },
          { title: 'Laufende Demos', value: 812 },
          { title: 'NSFW-Trigger gesendet', value: 91 },
          { title: 'Replikationen erzeugt', value: 91 },
          { title: 'Auto-Upgrades', value: 46 },
          { title: 'Lizenz-Conversions', value: 33 },
        ].map((stat, i) => (
          <motion.div key={i} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: i * 0.1 }}>
            <Card className="bg-black/80 backdrop-blur border border-gold text-gold rounded-2xl shadow-lg">
              <CardContent className="p-4 text-center">
                <p className="text-xl font-semibold">{stat.value}</p>
                <p className="text-sm tracking-wide uppercase">{stat.title}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <motion.div className="bg-black/80 border border-gold rounded-2xl p-6 mt-6 shadow-inner" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
        <h2 className="text-xl font-bold mb-4">Live Nutzeraktivität</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#FFD700" />
            <YAxis stroke="#FFD700" />
            <Tooltip contentStyle={{ backgroundColor: 'black', borderColor: '#FFD700' }} />
            <Line type="monotone" dataKey="value" stroke="#FFD700" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
}
