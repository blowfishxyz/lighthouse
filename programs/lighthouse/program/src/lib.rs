#![allow(clippy::result_large_err)]
#![allow(clippy::too_many_arguments)]

use anchor_lang::prelude::*;
use borsh::{BorshDeserialize, BorshSerialize};

pub mod error;
pub mod processor;
pub mod state;
pub mod structs;
pub mod utils;

use crate::{processor::v1::*, structs::*};

declare_id!("2dGQitaSbztBZq996FqCmnDkrgimvgzPyMAobUCH2N78");

#[program]
pub mod lighthouse {

    use super::*;
    pub fn create_cache_account_v1<'info>(
        ctx: Context<'_, '_, '_, 'info, CreateCacheAccountV1<'info>>,
        cache_index: u8,
        cache_account_size: u64,
    ) -> Result<()> {
        processor::v1::create_cache_account(ctx, cache_index, cache_account_size)
    }

    pub fn create_test_account_v1<'info>(
        ctx: Context<'_, '_, '_, 'info, CreateTestAccountV1<'info>>,
    ) -> Result<()> {
        processor::v1::create_test_account(ctx)
    }

    pub fn write_v1<'info>(
        ctx: Context<'_, '_, '_, 'info, WriteV1<'info>>,
        cache_index: u8,
        write_type: WriteType,
    ) -> Result<()> {
        processor::v1::write(ctx, cache_index, write_type)
    }

    pub fn assert_v1<'info>(
        ctx: Context<'_, '_, '_, 'info, AssertV1<'info>>,
        assertions: Vec<Assertion>,
        logical_expression: Option<Vec<Expression>>,
        // options: Option<Config>,
    ) -> Result<()> {
        processor::assert(ctx, assertions, logical_expression, None)
    }
}
