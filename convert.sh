#!/bin/bash

python3 convert.py
mongoimport --drop --db=nobel --collection=laureates laureates.import