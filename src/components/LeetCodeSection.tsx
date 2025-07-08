import React, { useEffect, useState } from 'react';
import { SiLeetcode } from 'react-icons/si';

interface LeetCodeProfile {
  username: string;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  ranking: number;
  contributionPoints: number;
  reputation: number;
  avatar: string;
}

export const LeetCodeSection: React.FC = () => {
  const [profile, setProfile] = useState<LeetCodeProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeetCodeProfile = async () => {
      setLoading(true);
      setError(null);
      try {
        console.log('Fetching LeetCode profile for: Dhruv629');
        const res = await fetch('https://leetcode-stats-api.herokuapp.com/Dhruv629');
        console.log('Response status:', res.status);
        const data = await res.json();
        console.log('Response data:', data);
        if (!data || !data.status || data.status === 'error') {
          throw new Error(data.message || 'No profile found');
        }
        setProfile({
          username: data.username,
          totalSolved: data.totalSolved,
          totalQuestions: data.totalQuestions,
          easySolved: data.easySolved,
          totalEasy: data.totalEasy,
          mediumSolved: data.mediumSolved,
          totalMedium: data.totalMedium,
          hardSolved: data.hardSolved,
          totalHard: data.totalHard,
          ranking: data.ranking,
          contributionPoints: data.contributionPoints || 0,
          reputation: data.reputation || 0,
          avatar: data.avatar || 'https://leetcode.com/static/images/LeetCode_Sharing.png',
        });
      } catch (err) {
        console.error('Error fetching LeetCode profile:', err);
        setError(`Failed to fetch LeetCode profile: ${err instanceof Error ? err.message : 'Unknown error'}`);
      } finally {
        setLoading(false);
      }
    };
    fetchLeetCodeProfile();
  }, []);

  return (
    <div className="min-h-[300px] py-12 flex flex-col items-center justify-center">
      <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6">LEETCODE PROFILE</h2>
      {loading && <div className="text-slate-400">Loading...</div>}
      {error && <div className="text-red-400">{error}</div>}
      {profile && (
        <div className="pixel-card bg-slate-700/90 p-8 rounded-xl shadow-lg flex flex-col items-center gap-6 w-full">
          <div className="flex flex-col items-center gap-2">
            <SiLeetcode className="text-yellow-400 text-5xl mb-2" />
            <span className="text-lg font-bold text-white">{profile.username}</span>
            <span className="text-cyan-400 text-sm">Ranking: #{profile.ranking}</span>
            <span className="text-yellow-400 text-sm">Reputation: {profile.reputation}</span>
            <span className="text-fuchsia-400 text-sm">Contribution Points: {profile.contributionPoints}</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-2">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-green-400">{profile.totalSolved}</span>
              <span className="text-xs text-slate-300 font-semibold mt-1">Total Solved</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-slate-200">{profile.totalQuestions}</span>
              <span className="text-xs text-slate-300 font-semibold mt-1">Total Questions</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold text-emerald-400">{profile.easySolved}/{profile.totalEasy}</span>
              <span className="text-xs text-slate-300 font-semibold mt-1">Easy</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold text-orange-400">{profile.mediumSolved}/{profile.totalMedium}</span>
              <span className="text-xs text-slate-300 font-semibold mt-1">Medium</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold text-pink-400">{profile.hardSolved}/{profile.totalHard}</span>
              <span className="text-xs text-slate-300 font-semibold mt-1">Hard</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 