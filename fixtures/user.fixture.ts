import { test as base } from '@playwright/test';
import { createUserData } from '../test-data/userData';

// We extend the standard test to include our 'user'
export const test = base.extend({
  user: async ({}, use) => {
    // 1. Get a fresh user from our factory
    const newUser = createUserData();
    
    // 2. Give that user to the test
    await use(newUser);
  }
});

export const expect = test.expect;