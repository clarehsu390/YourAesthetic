# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## boards

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null, indexed
user_id         | integer   | not null, indexed

## pins

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed
description     | text      |
url             | string    | not null
image_url       | string    | not null
user_id         | integer   | (saved pins)

## pinnings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
board_id        | integer   | not null, indexed
pin_id          | integer   | not null ,indexed


## follows

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
followee_id     | integer   | not null
follower_id     | string    | not null
