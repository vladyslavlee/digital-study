import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const DAYS = 0;
    const HOURS = 16;
    const MINUTES = 0;

    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + DAYS);
    targetDate.setHours(targetDate.getHours() + HOURS);
    targetDate.setMinutes(targetDate.getMinutes() + MINUTES);

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - Date.now();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    // { value: timeLeft.days, label: 'днів' }, // show days if needed
    { value: timeLeft.hours, label: 'годин' },
    { value: timeLeft.minutes, label: 'хвилин' },
    { value: timeLeft.seconds, label: 'секунд' },
  ];

  return (
    <div className='flex gap-2 sm:gap-3'>
      {timeBlocks.map((block, index) => (
        <div key={index} className='text-center'>
          <div className='w-12 h-12 rounded-xl bg-card border border-border shadow-sm flex items-center justify-center'>
            <span className='text-xl sm:text-2xl font-bold text-primary'>
              {String(block.value).padStart(2, '0')}
            </span>
          </div>
          <span className='text-xs text-muted-foreground mt-1 block'>{block.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
