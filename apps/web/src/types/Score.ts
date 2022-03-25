import { Session as NextAuthSession } from 'next-auth/core/types';

export type Tweet = {
  text: string;
  in_reply_to_user_id: string;
  public_metrics: PublicMetrics;
};

export interface PublicMetrics {
  retweet_count: number;
  reply_count: number;
  like_count: number;
  quote_count: number;
}

export interface Total {
  tweet_count: number;
  total: number;
}

export type UserScore = PublicMetrics & Total;

export type Session = NextAuthSession & Record<string, string>;
