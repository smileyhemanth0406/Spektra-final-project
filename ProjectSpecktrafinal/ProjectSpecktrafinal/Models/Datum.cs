﻿using System;
using System.Collections.Generic;

namespace ProjectSpecktrafinal.Models;

public partial class Datum
{
    public int Id { get; set; }

    public string? Email { get; set; }

    public string? Password { get; set; }

    public DateTime? RegisteredDate { get; set; }
}
