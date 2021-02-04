# This workflow will do a clean install of node dependencies, build the source code and run tests across different versions of node
# For more information see: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions

name: iboxpay

on:
    workflow_dispatch:
    schedule:
      - cron: "0 0-8/1 * * *"
    watch:
      types: [started]
    repository_dispatch:
      types: smile

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Use Node.js 12.x
        uses: actions/setup-node@v1
        with:
          node-version: 12.x
      - name: npm install
        run: |
          npm install
      - name: '运行 【笑谱1】'
        run: |
          node Node/iboxpay.js
      - name: '运行 【笑谱2】'
        run: |
          node Node/iboxpay.js
      - name: '运行 【笑谱3】'
        run: |
          node Node/iboxpay.js
      - name: '运行 【笑谱4】'
        run: |
          node Node/iboxpay.js
        env:
          XP_iboxpayHEADER: ${{ secrets.XP_iboxpayHEADER }}
          XP_refreshTOKEN: ${{ secrets.XP_refreshTOKEN }}
          XP_CASH: ${{ secrets.XP_CASH }}
          XP_live: ${{ secrets.XP_live }}
          TG_BOT_TOKEN: ${{ secrets.TG_BOT_TOKEN }}
          TG_USER_ID: ${{ secrets.TG_USER_ID }}