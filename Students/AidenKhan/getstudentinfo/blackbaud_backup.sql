--
-- PostgreSQL database dump
--

\restrict lBeeAdZTffwxXrQ57Kad8aCYmb9mXzZ9kMFkEZv70MYNmfeeZffba2o8jX81l03

-- Dumped from database version 18.3 (Homebrew)
-- Dumped by pg_dump version 18.3 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: oauth_tokens; Type: TABLE; Schema: public; Owner: ig4621
--

CREATE TABLE public.oauth_tokens (
    user_id integer,
    access_token text,
    refresh_token text,
    expires_at bigint
);


ALTER TABLE public.oauth_tokens OWNER TO ig4621;

--
-- Name: users; Type: TABLE; Schema: public; Owner: ig4621
--

CREATE TABLE public.users (
    id integer NOT NULL,
    blackbaud_user_id text
);


ALTER TABLE public.users OWNER TO ig4621;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: ig4621
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO ig4621;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ig4621
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: ig4621
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: oauth_tokens; Type: TABLE DATA; Schema: public; Owner: ig4621
--

COPY public.oauth_tokens (user_id, access_token, refresh_token, expires_at) FROM stdin;
1	eyJhbGciOiJSUzI1NiIsImtpZCI6IjREVjZzVkxIM0FtU1JTbUZqMk04Wm5wWHU3WSIsInR5cCI6IkpXVCJ9.eyJhcHBsaWNhdGlvbmlkIjoiYzg1ZTBkZjEtMWUxZi00YzFjLTg5ZjQtNGQ1MzczNzE3ZDE2IiwibW9kZSI6IkZ1bGwiLCJncmFudGF1dGhvcml0eSI6IkNvbm5lY3Rpb24iLCJlbnZpcm9ubWVudG5hbWUiOiJTS1kgRGV2ZWxvcGVyIENvaG9ydCBFbnZpcm9ubWVudCAxIiwiZW52aXJvbm1lbnRpZCI6InAtdm5WQWJEdGZ1MEd5TXFTRG1HLV9xdyIsImxlZ2FsZW50aXR5aWQiOiJwLWdWcXJfeU9Ta1Vxc0VLdG0tWnBKbkEiLCJsZWdhbGVudGl0eW5hbWUiOiJTS1kgRGV2ZWxvcGVyIENvaG9ydCIsInpvbmUiOiJwLXVzYTAxIiwibmFtZWlkIjoiYzY5ZGRiZjMtN2RhOS00YjdkLWI0ZWYtMTAxNDNiOWY3NmY0IiwianRpIjoiYzkyOGNhZTctMDFjNy00NDBmLWFmMDAtMjNhNThhODAzNGRhIiwiZXhwIjoxNzczMDExMjczLCJpYXQiOjE3NzMwMDc2NzMsImlzcyI6Imh0dHBzOi8vb2F1dGgyLnNreS5ibGFja2JhdWQuY29tLyIsImF1ZCI6ImJsYWNrYmF1ZCJ9.Mts3yj0xKIdF3nQ05Slu3d2dM77cP3k6DaAHEhVhdcChT2gEfoo_xcSqLNOIvfi3gfSQc186yRlqoHVvjtXLbcn6jjoeWoijTFLzWf0WfgXKA0hmuS-nT-dZRLi4XElV9zth7na_vJqx0gAzJ1Ij75kJ6nJboKXt-bsErPwiuZke7frH_3j9RYm-HYIEE8MoF2lE9-VjHAosvIjt35t2Avfgl3WLqozGik0bpesHBv_bFip39m4j1ktLMwAQlhYtgUGsY9hzIeAiMQIG_FuxuRl3XtVEwccRRXChJ-CrZw-DB3MgT5gO21h9I0k11eFpEz7egsSRAZVIEbocodkOpw	3a7b63cb6ceb4ddfb1d4a9925cc3da44	1773011274255
3	eyJhbGciOiJSUzI1NiIsImtpZCI6IjREVjZzVkxIM0FtU1JTbUZqMk04Wm5wWHU3WSIsInR5cCI6IkpXVCJ9.eyJhcHBsaWNhdGlvbmlkIjoiYzg1ZTBkZjEtMWUxZi00YzFjLTg5ZjQtNGQ1MzczNzE3ZDE2IiwibW9kZSI6IkZ1bGwiLCJncmFudGF1dGhvcml0eSI6IkNvbm5lY3Rpb24iLCJlbnZpcm9ubWVudG5hbWUiOiJTS1kgRGV2ZWxvcGVyIENvaG9ydCBFbnZpcm9ubWVudCAxIiwiZW52aXJvbm1lbnRpZCI6InAtdm5WQWJEdGZ1MEd5TXFTRG1HLV9xdyIsImxlZ2FsZW50aXR5aWQiOiJwLWdWcXJfeU9Ta1Vxc0VLdG0tWnBKbkEiLCJsZWdhbGVudGl0eW5hbWUiOiJTS1kgRGV2ZWxvcGVyIENvaG9ydCIsInpvbmUiOiJwLXVzYTAxIiwibmFtZWlkIjoiODYwNjBjZmItNzlhZC00NzljLWI4MTAtOGZiYzk1NTM5ZTA2IiwianRpIjoiYWVjOGU0MDUtYjUwNC00YWU5LWFiMmEtYzNkYWRiZDE4NTdiIiwiZXhwIjoxNzczMDExNTcxLCJpYXQiOjE3NzMwMDc5NzEsImlzcyI6Imh0dHBzOi8vb2F1dGgyLnNreS5ibGFja2JhdWQuY29tLyIsImF1ZCI6ImJsYWNrYmF1ZCJ9.UrZ_6hBWTuiUl2csfwL6Sh5dQBocg9LN2KUqiXqv7Nm39OIx4mDDgufu3l6DHFmhDrBYFPtvzqfOq0t0jFqZ4bwONcrTGcoJxgrqEjYynNsjeZsqugoh7B-vKxiZn35BohIYKBnnF_WlP6yeBhW9z98BntMmFzA1uewIUGqmUlC4D3iGfKnwnyAxwTzsw3E5VFoWg_5XqYWA_g8EpeDkJZlOq85ICAd8Gg4RduQp8QKd3pBmSXaO4qrEA_BlMpFg_UVfeRk3CRcOXfiCYUvOd8UhVuASCS8yX9DodrbWnJ11g3PgnF_Ir8R6D9NcWJREyfnvSzR-PnnUrRd1q5aiKQ	aab6f566281443769d20c2ca606dd376	1773011572320
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: ig4621
--

COPY public.users (id, blackbaud_user_id) FROM stdin;
1	3315567
2	\N
3	3292966
4	\N
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ig4621
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


--
-- Name: oauth_tokens oauth_tokens_user_unique; Type: CONSTRAINT; Schema: public; Owner: ig4621
--

ALTER TABLE ONLY public.oauth_tokens
    ADD CONSTRAINT oauth_tokens_user_unique UNIQUE (user_id);


--
-- Name: users users_blackbaud_user_id_key; Type: CONSTRAINT; Schema: public; Owner: ig4621
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_blackbaud_user_id_key UNIQUE (blackbaud_user_id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: ig4621
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: oauth_tokens oauth_tokens_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ig4621
--

ALTER TABLE ONLY public.oauth_tokens
    ADD CONSTRAINT oauth_tokens_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

\unrestrict lBeeAdZTffwxXrQ57Kad8aCYmb9mXzZ9kMFkEZv70MYNmfeeZffba2o8jX81l03

